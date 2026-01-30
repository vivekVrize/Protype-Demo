import { Injectable } from '@angular/core';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { db, RFQ } from '../database/db';

@Injectable({
  providedIn: 'root'
})
export class RFQService {
  private rfqsSubject = new BehaviorSubject<RFQ[]>([]);
  public rfqs$ = this.rfqsSubject.asObservable();

  constructor() {
    this.loadRFQs();
  }

  private async loadRFQs(): Promise<void> {
    const rfqs = await db.rfqs.toArray();
    this.rfqsSubject.next(rfqs);
  }

  getRFQs(): Observable<RFQ[]> {
    return from(db.rfqs.toArray());
  }

  getRFQById(id: number): Observable<RFQ | undefined> {
    return from(db.rfqs.get(id));
  }

  createRFQ(rfq: Omit<RFQ, 'id'>): Observable<number> {
    return from(db.rfqs.add(rfq as RFQ)).pipe(
      map(id => {
        this.loadRFQs();
        return id as number;
      })
    );
  }

  updateRFQ(id: number, updates: Partial<RFQ>): Observable<number> {
    return from(db.rfqs.update(id, updates)).pipe(
      map(result => {
        this.loadRFQs();
        return result;
      })
    );
  }

  deleteRFQ(id: number): Observable<void> {
    return from(db.rfqs.delete(id)).pipe(
      map(() => {
        this.loadRFQs();
      })
    );
  }

  getRFQsByStatus(status: RFQ['status']): Observable<RFQ[]> {
    return from(db.rfqs.where('status').equals(status).toArray());
  }

  getRFQsByCreator(createdBy: number): Observable<RFQ[]> {
    return from(db.rfqs.where('createdBy').equals(createdBy).toArray());
  }

  getPublishedRFQs(): Observable<RFQ[]> {
    return from(db.rfqs.where('status').equals('published').toArray());
  }
}
