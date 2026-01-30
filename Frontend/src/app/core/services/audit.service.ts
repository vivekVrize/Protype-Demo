import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { db, AuditLog } from '../database/db';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  constructor(private authService: AuthService) {}

  logAction(
    action: string,
    entityType: string,
    entityId: number,
    details: string
  ): Observable<number> {
    const user = this.authService.getCurrentUser();
    if (!user || !user.id) {
      throw new Error('No authenticated user');
    }

    const log: Omit<AuditLog, 'id'> = {
      userId: user.id,
      action,
      entityType,
      entityId,
      timestamp: new Date(),
      details
    };

    return from(db.auditLogs.add(log as AuditLog).then(id => id as number));
  }

  getAuditLogs(): Observable<AuditLog[]> {
    return from(db.auditLogs.orderBy('timestamp').reverse().toArray());
  }

  getAuditLogsByEntity(entityType: string, entityId: number): Observable<AuditLog[]> {
    return from(
      db.auditLogs
        .where('[entityType+entityId]')
        .equals([entityType, entityId])
        .reverse()
        .sortBy('timestamp')
    );
  }

  getAuditLogsByUser(userId: number): Observable<AuditLog[]> {
    return from(
      db.auditLogs
        .where('userId')
        .equals(userId)
        .reverse()
        .sortBy('timestamp')
    );
  }

  getAuditLogsByDateRange(startDate: Date, endDate: Date): Observable<AuditLog[]> {
    return from(
      db.auditLogs
        .where('timestamp')
        .between(startDate, endDate, true, true)
        .reverse()
        .sortBy('timestamp')
    );
  }
}
