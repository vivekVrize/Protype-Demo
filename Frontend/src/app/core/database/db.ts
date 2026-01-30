import Dexie, { Table } from 'dexie';

export interface User {
  id?: number;
  username: string;
  email: string;
  role: 'admin' | 'procurement_officer' | 'approving_authority' | 'witness' | 'supplier';
  name: string;
  companyName?: string;
  avatar?: string;
}

export interface Attachment {
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: Date;
}

export interface RFQ {
  id?: number;
  rfqNumber: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  createdBy: number; // User ID
  createdAt: Date;
  publishDate: Date;
  closeDate: Date;
  status: 'draft' | 'published' | 'closed' | 'evaluated' | 'awarded';
  approvalStatus: 'pending' | 'approved' | 'rejected';
  approvedBy?: number;
  attachments?: Attachment[];
}

export interface LineItem {
  itemNo: number;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  remarks?: string;
}

export interface Quotation {
  id?: number;
  rfqId: number;
  supplierId: number;
  quotationNumber: string;
  submittedAt: Date;
  status: 'submitted' | 'opened' | 'evaluated' | 'awarded' | 'rejected';
  totalAmount: number;
  lineItems: LineItem[];
  attachments?: Attachment[];
  isAlternative: boolean;
  score?: number;
  remarks?: string;
}

export interface AuditLog {
  id?: number;
  userId: number;
  action: string;
  entityType: string;
  entityId: number;
  timestamp: Date;
  details: string;
}

export class AppDatabase extends Dexie {
  users!: Table<User>;
  rfqs!: Table<RFQ>;
  quotations!: Table<Quotation>;
  auditLogs!: Table<AuditLog>;

  constructor() {
    super('EProcurementDB');
    this.version(1).stores({
      users: '++id, username, email, role',
      rfqs: '++id, rfqNumber, status, createdBy',
      quotations: '++id, rfqId, supplierId, status',
      auditLogs: '++id, userId, timestamp, entityType'
    });
  }
}

export const db = new AppDatabase();
