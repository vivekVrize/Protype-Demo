import { Injectable } from '@angular/core';
import { db, User, RFQ, Quotation } from './db';

@Injectable({
  providedIn: 'root'
})
export class SeedDataService {
  async seedDatabase(): Promise<void> {
    // Clear existing data
    await db.users.clear();
    await db.rfqs.clear();
    await db.quotations.clear();
    await db.auditLogs.clear();

    // Seed Users - 11 Demo Accounts
    const users: User[] = [
      // Admin
      {
        id: 1,
        username: 'admin',
        email: 'admin@towncouncil.sg',
        role: 'admin',
        name: 'Admin User',
        avatar: '/assets/avatars/admin.jpg'
      },
      // Procurement Officers
      {
        id: 2,
        username: 'procurement1',
        email: 'sarah.tan@towncouncil.sg',
        role: 'procurement_officer',
        name: 'Sarah Tan',
        avatar: '/assets/avatars/sarah.jpg'
      },
      {
        id: 3,
        username: 'procurement2',
        email: 'rachel.koh@towncouncil.sg',
        role: 'procurement_officer',
        name: 'Rachel Koh',
        avatar: '/assets/avatars/rachel.jpg'
      },
      // Approving Authorities
      {
        id: 4,
        username: 'approver1',
        email: 'david.lim@towncouncil.sg',
        role: 'approving_authority',
        name: 'David Lim',
        avatar: '/assets/avatars/david.jpg'
      },
      {
        id: 5,
        username: 'approver2',
        email: 'michael.wong@towncouncil.sg',
        role: 'approving_authority',
        name: 'Michael Wong',
        avatar: '/assets/avatars/michael.jpg'
      },
      // Witness Officers
      {
        id: 6,
        username: 'witness1',
        email: 'emily.wong@towncouncil.sg',
        role: 'witness',
        name: 'Emily Wong',
        avatar: '/assets/avatars/emily.jpg'
      },
      {
        id: 7,
        username: 'witness2',
        email: 'james.tan@towncouncil.sg',
        role: 'witness',
        name: 'James Tan',
        avatar: '/assets/avatars/james.jpg'
      },
      // Suppliers
      {
        id: 8,
        username: 'supplier1',
        email: 'contact@acmecorp.sg',
        role: 'supplier',
        name: 'John Chen',
        companyName: 'Acme Corporation Pte Ltd',
        avatar: '/assets/avatars/john.jpg'
      },
      {
        id: 9,
        username: 'supplier2',
        email: 'sales@bestbuilders.sg',
        role: 'supplier',
        name: 'Mary Lee',
        companyName: 'Best Builders & Contractors',
        avatar: '/assets/avatars/mary.jpg'
      },
      {
        id: 10,
        username: 'supplier3',
        email: 'info@globalservices.sg',
        role: 'supplier',
        name: 'Kumar Raj',
        companyName: 'Global Services Pte Ltd',
        avatar: '/assets/avatars/kumar.jpg'
      },
      {
        id: 11,
        username: 'supplier4',
        email: 'info@newvendor.sg',
        role: 'supplier',
        name: 'Lisa Ng',
        companyName: 'New Vendor Services Pte Ltd',
        avatar: '/assets/avatars/lisa.jpg'
      }
    ];

    await db.users.bulkAdd(users);

    // Seed RFQs
    const rfqs: RFQ[] = [
      {
        id: 1,
        rfqNumber: 'RFQ-2026-001',
        title: 'Lift Upgrading Works - Block 123',
        description: 'Upgrading of 4 passenger lifts including modernization of control systems, replacement of doors, and installation of new cabins.',
        category: 'Construction & Renovation',
        budget: 250000,
        createdBy: 2,
        createdAt: new Date('2026-01-15'),
        publishDate: new Date('2026-01-20'),
        closeDate: new Date('2026-02-10'),
        status: 'published',
        approvalStatus: 'approved',
        approvedBy: 4
      },
      {
        id: 2,
        rfqNumber: 'RFQ-2026-002',
        title: 'Cleaning Services for Q1 2026',
        description: 'Daily cleaning services for common areas including corridors, staircases, lifts, and surrounding areas.',
        category: 'Services',
        budget: 45000,
        createdBy: 2,
        createdAt: new Date('2026-01-25'),
        publishDate: new Date('2026-01-28'),
        closeDate: new Date('2026-02-15'),
        status: 'published',
        approvalStatus: 'approved',
        approvedBy: 4
      },
      {
        id: 3,
        rfqNumber: 'RFQ-2026-003',
        title: 'Landscaping Services 2026',
        description: 'Comprehensive landscaping services including grass cutting, tree pruning, and garden maintenance.',
        category: 'Services',
        budget: 80000,
        createdBy: 2,
        createdAt: new Date('2026-01-28'),
        publishDate: new Date('2026-02-01'),
        closeDate: new Date('2026-02-20'),
        status: 'published',
        approvalStatus: 'approved',
        approvedBy: 4
      },
      {
        id: 4,
        rfqNumber: 'RFQ-2026-004',
        title: 'Electrical Maintenance Contract',
        description: 'Annual electrical maintenance contract for all blocks including routine inspections and emergency repairs.',
        category: 'Maintenance',
        budget: 120000,
        createdBy: 3,
        createdAt: new Date('2026-01-20'),
        publishDate: new Date('2026-01-25'),
        closeDate: new Date('2026-02-12'),
        status: 'published',
        approvalStatus: 'approved',
        approvedBy: 5
      },
      {
        id: 5,
        rfqNumber: 'RFQ-2026-005',
        title: 'Playground Equipment Replacement',
        description: 'Replacement of playground equipment at 3 locations including swings, slides, and safety surfacing.',
        category: 'Construction & Renovation',
        budget: 95000,
        createdBy: 2,
        createdAt: new Date('2026-01-29'),
        publishDate: new Date('2026-01-29'),
        closeDate: new Date('2026-02-18'),
        status: 'draft',
        approvalStatus: 'pending',
        approvedBy: undefined
      }
    ];

    await db.rfqs.bulkAdd(rfqs);

    // Seed Quotations
    const quotations: Quotation[] = [
      {
        id: 1,
        rfqId: 1,
        supplierId: 8,
        quotationNumber: 'QTN-2026-001-001',
        submittedAt: new Date('2026-02-05 14:30:00'),
        status: 'submitted',
        totalAmount: 235000,
        isAlternative: false,
        lineItems: [
          {
            itemNo: 1,
            description: 'Lift modernization - 4 units',
            quantity: 4,
            unitPrice: 55000,
            totalPrice: 220000
          },
          {
            itemNo: 2,
            description: 'Testing and commissioning',
            quantity: 1,
            unitPrice: 15000,
            totalPrice: 15000
          }
        ]
      },
      {
        id: 2,
        rfqId: 1,
        supplierId: 9,
        quotationNumber: 'QTN-2026-001-002',
        submittedAt: new Date('2026-02-06 10:15:00'),
        status: 'submitted',
        totalAmount: 248000,
        isAlternative: false,
        lineItems: [
          {
            itemNo: 1,
            description: 'Complete lift upgrading package',
            quantity: 4,
            unitPrice: 60000,
            totalPrice: 240000
          },
          {
            itemNo: 2,
            description: 'Project management and testing',
            quantity: 1,
            unitPrice: 8000,
            totalPrice: 8000
          }
        ]
      },
      {
        id: 3,
        rfqId: 2,
        supplierId: 10,
        quotationNumber: 'QTN-2026-002-001',
        submittedAt: new Date('2026-02-08 16:45:00'),
        status: 'submitted',
        totalAmount: 42000,
        isAlternative: false,
        lineItems: [
          {
            itemNo: 1,
            description: 'Daily cleaning services - 3 months',
            quantity: 90,
            unitPrice: 450,
            totalPrice: 40500
          },
          {
            itemNo: 2,
            description: 'Cleaning supplies and equipment',
            quantity: 1,
            unitPrice: 1500,
            totalPrice: 1500
          }
        ]
      },
      {
        id: 4,
        rfqId: 3,
        supplierId: 10,
        quotationNumber: 'QTN-2026-003-001',
        submittedAt: new Date('2026-02-10 11:20:00'),
        status: 'submitted',
        totalAmount: 76000,
        isAlternative: false,
        lineItems: [
          {
            itemNo: 1,
            description: 'Landscaping services - Annual contract',
            quantity: 12,
            unitPrice: 6000,
            totalPrice: 72000
          },
          {
            itemNo: 2,
            description: 'Special projects and ad-hoc works',
            quantity: 1,
            unitPrice: 4000,
            totalPrice: 4000
          }
        ]
      },
      {
        id: 5,
        rfqId: 3,
        supplierId: 8,
        quotationNumber: 'QTN-2026-003-002',
        submittedAt: new Date('2026-02-11 09:30:00'),
        status: 'submitted',
        totalAmount: 78500,
        isAlternative: false,
        lineItems: [
          {
            itemNo: 1,
            description: 'Comprehensive landscaping package',
            quantity: 12,
            unitPrice: 6500,
            totalPrice: 78000
          },
          {
            itemNo: 2,
            description: 'Emergency response service',
            quantity: 1,
            unitPrice: 500,
            totalPrice: 500
          }
        ]
      }
    ];

    await db.quotations.bulkAdd(quotations);

    console.log('✅ Database seeded successfully with 11 demo accounts and sample data');
  }
}
