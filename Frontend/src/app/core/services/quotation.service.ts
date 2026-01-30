import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { db, Quotation } from '../database/db';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  private quotationsSubject = new BehaviorSubject<Quotation[]>([]);
  public quotations$ = this.quotationsSubject.asObservable();

  constructor() {
    this.loadQuotations();
  }

  private async loadQuotations(): Promise<void> {
    const quotations = await db.quotations.toArray();
    this.quotationsSubject.next(quotations);
  }

  getQuotations(): Observable<Quotation[]> {
    return from(db.quotations.toArray());
  }

  getQuotationById(id: number): Observable<Quotation | undefined> {
    return from(db.quotations.get(id));
  }

  getQuotationsByRFQ(rfqId: number): Observable<Quotation[]> {
    return from(db.quotations.where('rfqId').equals(rfqId).toArray());
  }

  getQuotationsBySupplier(supplierId: number): Observable<Quotation[]> {
    return from(db.quotations.where('supplierId').equals(supplierId).toArray());
  }

  createQuotation(quotation: Omit<Quotation, 'id'>): Observable<number> {
    return from(db.quotations.add(quotation as Quotation)).pipe(
      map(id => {
        this.loadQuotations();
        return id as number;
      })
    );
  }

  updateQuotation(id: number, updates: Partial<Quotation>): Observable<number> {
    return from(db.quotations.update(id, updates)).pipe(
      map(result => {
        this.loadQuotations();
        return result;
      })
    );
  }

  deleteQuotation(id: number): Observable<void> {
    return from(db.quotations.delete(id)).pipe(
      map(() => {
        this.loadQuotations();
      })
    );
  }

  openQuotations(rfqId: number): Observable<Quotation[]> {
    return from(
      db.quotations
        .where('rfqId')
        .equals(rfqId)
        .modify({ status: 'opened' })
        .then(() => db.quotations.where('rfqId').equals(rfqId).toArray())
    ).pipe(
      map(quotations => {
        this.loadQuotations();
        return quotations;
      })
    );
  }

  evaluateQuotation(id: number, score: number, remarks?: string): Observable<void> {
    return from(
      db.quotations.update(id, {
        status: 'evaluated',
        score,
        remarks
      })
    ).pipe(
      map(() => {
        this.loadQuotations();
      })
    );
  }

  awardQuotation(id: number): Observable<void> {
    return from(
      db.quotations.update(id, { status: 'awarded' })
    ).pipe(
      map(() => {
        this.loadQuotations();
      })
    );
  }

  rejectQuotation(id: number, remarks: string): Observable<void> {
    return from(
      db.quotations.update(id, {
        status: 'rejected',
        remarks
      })
    ).pipe(
      map(() => {
        this.loadQuotations();
      })
    );
  }
}
