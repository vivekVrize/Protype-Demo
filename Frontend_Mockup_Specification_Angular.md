# E-Procurement System - Frontend Mockup Specification (Angular)
## Visual Prototype (Happy Path Only)

**Project**: Town Council E-Procurement System - UI/UX Demo (Angular)
**Version**: 1.0
**Date**: 2026-01-30
**Purpose**: Demonstrate user interface and workflows without backend infrastructure using Angular

---

## ⚠️ IMPORTANT - Tailwind CSS v4 Notice

**This specification uses Tailwind CSS v4 with Angular Material/PrimeNG. Before starting development:**

1. **Check Latest Documentation**: https://tailwindcss.com/docs
2. **V4 Beta/Stable Status**: https://github.com/tailwindlabs/tailwindcss/releases
3. **Migration Guide**: https://tailwindcss.com/docs/upgrade-guide
4. **Angular Material**: https://material.angular.io/
5. **PrimeNG**: https://primeng.org/

**Key Changes in Tailwind v4:**
- CSS-first configuration using `@import "tailwindcss"` and `@theme` directive
- Native CSS features for better performance
- Updated plugin system
- New color system with oklch color space support

**Always verify installation steps with official documentation as v4 may introduce breaking changes.**

---

## 1. MOCKUP OVERVIEW

### 1.1 Objective
Create an interactive frontend mockup to demonstrate the user experience and core workflows of the e-Procurement system using Angular framework. This is a visual prototype showing the "happy path" - ideal scenarios without error handling or edge cases.

### 1.2 Scope
- **Frontend only** - No backend API required
- **Local data storage** - Using Dexie.js (IndexedDB wrapper) or localStorage
- **Demo data** - Pre-populated sample data for realistic demonstration
- **Core workflows** - Focus on primary user journeys
- **Visual fidelity** - Production-quality UI components

### 1.3 What This Mockup Will Demonstrate
✅ User interface design and navigation
✅ RFQ creation and publishing workflow
✅ Supplier quotation submission flow
✅ Quotation opening and evaluation process
✅ Responsive design across devices
✅ User interactions and transitions

### 1.4 What This Mockup Will NOT Include
❌ Real authentication (simulated login only)
❌ Backend API integration
❌ Real encryption (visual indicators only)
❌ Email notifications (simulated)
❌ Production-grade error handling
❌ Complex validation rules

---

## 2. TECHNOLOGY STACK

### 2.1 Frontend Framework
```json
{
  "framework": "Angular 17+",
  "language": "TypeScript",
  "buildTool": "Angular CLI",
  "styling": "Tailwind CSS v4 + Angular Material",
  "routing": "Angular Router",
  "stateManagement": "Services with RxJS",
  "forms": "Angular Reactive Forms",
  "dataStorage": "Dexie.js (IndexedDB)"
}
```

### 2.2 Key Libraries
```json
{
  "dependencies": {
    "@angular/core": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/forms": "^17.0.0",
    "@angular/router": "^17.0.0",
    "@angular/animations": "^17.0.0",
    "@angular/material": "^17.0.0",
    "@angular/cdk": "^17.0.0",
    "rxjs": "^7.8.0",
    "dexie": "^3.2.0",
    "date-fns": "^2.30.0",
    "ngx-charts": "^20.5.0",
    "lucide-angular": "^0.300.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.0.0",
    "@angular/cli": "^17.0.0",
    "@angular/compiler-cli": "^17.0.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "@tailwindcss/typography": "^0.5.10",
    "@tailwindcss/forms": "^0.5.7",
    "@faker-js/faker": "^8.3.0",
    "typescript": "~5.2.0"
  }
}
```

### 2.3 Tailwind CSS v4 Setup

**⚠️ IMPORTANT: Always check the latest Tailwind CSS v4 documentation before proceeding:**
- **Official Docs**: https://tailwindcss.com/docs
- **V4 Beta Docs**: https://tailwindcss.com/docs/v4-beta
- **Migration Guide**: https://tailwindcss.com/docs/upgrade-guide
- **GitHub Releases**: https://github.com/tailwindlabs/tailwindcss/releases

**Key Changes in Tailwind CSS v4:**
1. **CSS-first configuration** instead of JavaScript config files
2. Uses `@import "tailwindcss"` in CSS
3. Native CSS variables with `@theme` directive
4. Improved performance using native CSS features
5. Simplified plugin system

---

#### Installation Steps

**Step 1: Install Tailwind CSS v4**
```bash
# Check if v4 is stable or still in beta
# Visit https://tailwindcss.com/docs for the latest version

# For v4 beta:
npm install tailwindcss@next -D

# For v4 stable (when released):
npm install tailwindcss@latest -D

# Install required dependencies
npm install autoprefixer postcss -D
```

**Step 2: Create CSS Configuration (NEW in v4)**

Create `src/styles.css` with v4 syntax:
```css
@import "tailwindcss";

/* Theme configuration using @theme directive (v4 feature) */
@theme {
  /* Custom color palette */
  --color-primary-50: oklch(0.97 0.01 250);
  --color-primary-100: oklch(0.93 0.03 250);
  --color-primary-200: oklch(0.86 0.06 250);
  --color-primary-300: oklch(0.77 0.11 250);
  --color-primary-400: oklch(0.68 0.16 250);
  --color-primary-500: oklch(0.57 0.22 250);
  --color-primary-600: oklch(0.48 0.24 250);
  --color-primary-700: oklch(0.41 0.22 250);
  --color-primary-800: oklch(0.34 0.18 250);
  --color-primary-900: oklch(0.28 0.13 250);

  --color-success: oklch(0.65 0.18 145);
  --color-warning: oklch(0.75 0.15 65);
  --color-error: oklch(0.60 0.22 25);
  --color-info: oklch(0.60 0.18 220);

  /* Custom spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

/* Custom base styles */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

/* Custom utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .animate-in {
    animation: enter 200ms ease-out;
  }

  .animate-out {
    animation: exit 150ms ease-in forwards;
  }
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes exit {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
```

**Step 3: PostCSS Configuration**

Create `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Step 4: Optional - Traditional Config (if needed)**

If you prefer the traditional config approach, create `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
```

**Step 5: Angular Configuration**

Update `angular.json` to include Tailwind:
```json
{
  "projects": {
    "e-procurement-mockup": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

**Step 6: TypeScript Path Aliases**

Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "DOM"],
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/app/*"],
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"]
    },
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

### 2.4 Angular Material Setup

**Angular Material** provides well-designed components following Material Design principles.

**Official Documentation**: https://material.angular.io/

#### Initialize Angular Material

```bash
# Add Angular Material to your project
ng add @angular/material

# You'll be prompted with questions:
# ✔ Choose a prebuilt theme name: Indigo/Pink
# ✔ Set up global Angular Material typography styles? Yes
# ✔ Include the Angular animations module? Include and enable animations
```

#### Import Material Modules

Create a shared material module `src/app/shared/material.module.ts`:
```typescript
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatMenuModule,
  MatTableModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatTabsModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatDividerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTooltipModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatStepperModule,
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {}
```

#### Create Utility Functions

Create `src/app/shared/utils/cn.util.ts`:
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### 2.5 Development Tools
- **Node.js**: v18+
- **Package Manager**: npm or pnpm
- **Angular CLI**: v17+
- **Code Editor**: VS Code with Angular Language Service
- **Browser**: Chrome/Edge (latest)

---

## 3. DATA STORAGE STRATEGY

### 3.1 Dexie.js Schema

```typescript
// src/app/core/database/db.ts
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

export interface LineItem {
  itemNo: number;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  remarks?: string;
}

export interface Attachment {
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: Date;
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
```

### 3.2 Seed Data Service

```typescript
// src/app/core/services/seed-data.service.ts
import { Injectable } from '@angular/core';
import { db, User, RFQ, Quotation } from '../database/db';

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

    // Seed Users
    const users: User[] = [
      {
        id: 1,
        username: 'admin',
        email: 'admin@towncouncil.sg',
        role: 'admin',
        name: 'Admin User',
        avatar: '/avatars/admin.jpg'
      },
      {
        id: 2,
        username: 'procurement1',
        email: 'procurement@towncouncil.sg',
        role: 'procurement_officer',
        name: 'Sarah Tan',
        avatar: '/avatars/sarah.jpg'
      },
      {
        id: 3,
        username: 'approver1',
        email: 'approver@towncouncil.sg',
        role: 'approving_authority',
        name: 'David Lim',
        avatar: '/avatars/david.jpg'
      },
      {
        id: 4,
        username: 'witness1',
        email: 'witness@towncouncil.sg',
        role: 'witness',
        name: 'Emily Wong',
        avatar: '/avatars/emily.jpg'
      },
      {
        id: 5,
        username: 'supplier1',
        email: 'contact@acmecorp.sg',
        role: 'supplier',
        name: 'John Chen',
        companyName: 'Acme Corporation Pte Ltd',
        avatar: '/avatars/john.jpg'
      },
      {
        id: 6,
        username: 'supplier2',
        email: 'sales@bestbuilders.sg',
        role: 'supplier',
        name: 'Mary Lee',
        companyName: 'Best Builders & Contractors',
        avatar: '/avatars/mary.jpg'
      },
      {
        id: 7,
        username: 'supplier3',
        email: 'info@globalservices.sg',
        role: 'supplier',
        name: 'Kumar Raj',
        companyName: 'Global Services Pte Ltd',
        avatar: '/avatars/kumar.jpg'
      }
    ];

    await db.users.bulkAdd(users);

    // Seed RFQs
    const rfqs: RFQ[] = [
      {
        id: 1,
        rfqNumber: 'RFQ-2026-001',
        title: 'Lift Upgrading Works - Block 123',
        description: 'Upgrading of 4 passenger lifts including modernization...',
        category: 'Construction & Renovation',
        budget: 250000,
        createdBy: 2,
        createdAt: new Date('2026-01-15'),
        publishDate: new Date('2026-01-20'),
        closeDate: new Date('2026-02-10'),
        status: 'published',
        approvalStatus: 'approved',
        approvedBy: 3
      },
      {
        id: 2,
        rfqNumber: 'RFQ-2026-002',
        title: 'Cleaning Services for Q1 2026',
        description: 'Daily cleaning services for common areas...',
        category: 'Services',
        budget: 45000,
        createdBy: 2,
        createdAt: new Date('2026-01-25'),
        publishDate: new Date('2026-01-28'),
        closeDate: new Date('2026-02-15'),
        status: 'published',
        approvalStatus: 'approved',
        approvedBy: 3
      }
    ];

    await db.rfqs.bulkAdd(rfqs);

    // Seed Quotations
    const quotations: Quotation[] = [
      {
        id: 1,
        rfqId: 1,
        supplierId: 5,
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
      }
    ];

    await db.quotations.bulkAdd(quotations);

    console.log('✅ Database seeded successfully');
  }
}
```

---

## 4. DEMO ACCOUNTS & LOGIN SYSTEM

### 4.1 Demo Account Overview

The mockup includes pre-configured demo accounts representing different user roles and scenarios. Each account is designed to demonstrate specific workflows and permissions within the system.

### 4.2 Demo Account List

#### Staff Accounts

**1. Admin User**
```typescript
{
  username: 'admin',
  password: 'password123',
  email: 'admin@towncouncil.sg',
  role: 'admin',
  name: 'Admin User',
  description: 'Full system access - system configuration and user management'
}
```
**Purpose**: Demonstrate system administration capabilities, user management, and global system settings.

---

**2. Procurement Officer - Sarah Tan**
```typescript
{
  username: 'procurement1',
  password: 'password123',
  email: 'procurement@towncouncil.sg',
  role: 'procurement_officer',
  name: 'Sarah Tan',
  description: 'Primary procurement workflow - create RFQs, open quotations, evaluate'
}
```
**Purpose**:
- Create and manage RFQs
- Open sealed quotations
- Evaluate supplier submissions
- Generate procurement reports

**Sample Data**:
- Has created 5 RFQs
- 2 RFQs pending approval
- 3 RFQs published
- 8 quotations to evaluate

---

**3. Procurement Officer - Rachel Koh**
```typescript
{
  username: 'procurement2',
  password: 'password123',
  email: 'rachel.koh@towncouncil.sg',
  role: 'procurement_officer',
  name: 'Rachel Koh',
  description: 'Secondary procurement officer for testing collaboration'
}
```
**Purpose**: Demonstrate multi-user procurement workflows and task assignment.

**Sample Data**:
- Has created 2 RFQs
- 1 RFQ published
- Can act as witness for Sarah's quotation openings

---

**4. Approving Authority - David Lim**
```typescript
{
  username: 'approver1',
  password: 'password123',
  email: 'approver@towncouncil.sg',
  role: 'approving_authority',
  name: 'David Lim',
  description: 'Approve RFQs and award decisions'
}
```
**Purpose**:
- Review and approve RFQ creation
- Approve evaluation recommendations
- Approve award decisions
- View audit trails

**Sample Data**:
- 2 RFQs pending approval
- 10 RFQs previously approved
- 3 award recommendations pending

---

**5. Approving Authority - Michael Wong**
```typescript
{
  username: 'approver2',
  password: 'password123',
  email: 'michael.wong@towncouncil.sg',
  role: 'approving_authority',
  name: 'Michael Wong',
  description: 'Secondary approver for high-value procurements'
}
```
**Purpose**: Demonstrate dual-approval workflows for high-value RFQs (>$100,000).

---

**6. Witness Officer - Emily Wong**
```typescript
{
  username: 'witness1',
  password: 'password123',
  email: 'witness@towncouncil.sg',
  role: 'witness',
  name: 'Emily Wong',
  description: 'Witness quotation opening ceremonies'
}
```
**Purpose**:
- Witness quotation opening process
- Verify integrity of sealed submissions
- Co-sign opening records

**Sample Data**:
- Witnessed 5 quotation openings
- 2 upcoming openings assigned

---

**7. Witness Officer - James Tan**
```typescript
{
  username: 'witness2',
  password: 'password123',
  email: 'james.tan@towncouncil.sg',
  role: 'witness',
  name: 'James Tan',
  description: 'Alternative witness officer'
}
```

---

#### Supplier Accounts

**8. Supplier - Acme Corporation**
```typescript
{
  username: 'supplier1',
  password: 'password123',
  email: 'contact@acmecorp.sg',
  role: 'supplier',
  name: 'John Chen',
  companyName: 'Acme Corporation Pte Ltd',
  description: 'Active supplier with excellent track record'
}
```
**Purpose**:
- View available RFQs
- Submit quotations
- Track submission status
- View award results

**Sample Data**:
- Submitted 8 quotations
- Won 3 awards
- 2 pending evaluations
- Average score: 85/100

---

**9. Supplier - Best Builders & Contractors**
```typescript
{
  username: 'supplier2',
  password: 'password123',
  email: 'sales@bestbuilders.sg',
  role: 'supplier',
  name: 'Mary Lee',
  companyName: 'Best Builders & Contractors',
  description: 'Construction and renovation specialist'
}
```
**Purpose**: Demonstrate construction/renovation RFQ workflows.

**Sample Data**:
- Submitted 6 quotations
- Won 2 awards
- Specializes in lift upgrading and building works

---

**10. Supplier - Global Services**
```typescript
{
  username: 'supplier3',
  password: 'password123',
  email: 'info@globalservices.sg',
  role: 'supplier',
  name: 'Kumar Raj',
  companyName: 'Global Services Pte Ltd',
  description: 'Multi-service provider - cleaning, security, landscaping'
}
```
**Purpose**: Demonstrate service-based RFQ workflows.

**Sample Data**:
- Submitted 10 quotations
- Won 5 awards
- Provides cleaning, security, and maintenance services

---

**11. Supplier - New Vendor (Pending Verification)**
```typescript
{
  username: 'supplier4',
  password: 'password123',
  email: 'info@newvendor.sg',
  role: 'supplier',
  name: 'Lisa Ng',
  companyName: 'New Vendor Services Pte Ltd',
  description: 'Recently registered supplier with limited history'
}
```
**Purpose**: Demonstrate new supplier registration and first-time submission process.

**Sample Data**:
- Just registered
- No quotations submitted yet
- Viewing available RFQs

---

### 4.3 Login Screen with Auto-Fill

The login screen includes quick-access buttons for all demo accounts, allowing developers and stakeholders to easily test different user workflows.

#### Login Component Implementation

```typescript
// src/app/features/auth/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthService } from '@core/services/auth.service';

interface DemoAccount {
  username: string;
  password: string;
  name: string;
  role: string;
  description: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  showDemoAccounts = true;

  demoAccounts: DemoAccount[] = [
    {
      username: 'procurement1',
      password: 'password123',
      name: 'Sarah Tan',
      role: 'Procurement Officer',
      description: 'Create RFQs, Open & Evaluate Quotations',
      color: 'primary',
      icon: 'assignment'
    },
    {
      username: 'approver1',
      password: 'password123',
      name: 'David Lim',
      role: 'Approving Authority',
      description: 'Approve RFQs & Award Decisions',
      color: 'accent',
      icon: 'verified'
    },
    {
      username: 'witness1',
      password: 'password123',
      name: 'Emily Wong',
      role: 'Witness Officer',
      description: 'Witness Quotation Opening',
      color: 'warn',
      icon: 'visibility'
    },
    {
      username: 'supplier1',
      password: 'password123',
      name: 'John Chen (Acme Corp)',
      role: 'Supplier',
      description: 'Submit Quotations & View Awards',
      color: 'primary',
      icon: 'store'
    },
    {
      username: 'supplier2',
      password: 'password123',
      name: 'Mary Lee (Best Builders)',
      role: 'Supplier',
      description: 'Construction Specialist',
      color: 'primary',
      icon: 'construction'
    },
    {
      username: 'supplier3',
      password: 'password123',
      name: 'Kumar Raj (Global Services)',
      role: 'Supplier',
      description: 'Multi-Service Provider',
      color: 'primary',
      icon: 'business'
    },
    {
      username: 'admin',
      password: 'password123',
      name: 'Admin User',
      role: 'Administrator',
      description: 'Full System Access',
      color: 'warn',
      icon: 'admin_panel_settings'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  fillDemoAccount(account: DemoAccount): void {
    this.loginForm.patchValue({
      username: account.username,
      password: account.password
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['/dashboard']);
          } else {
            // Show error message
            console.error('Invalid credentials');
          }
        },
        error: (error) => {
          console.error('Login error:', error);
        }
      });
    }
  }

  toggleDemoAccounts(): void {
    this.showDemoAccounts = !this.showDemoAccounts;
  }
}
```

#### Login Template

```html
<!-- src/app/features/auth/pages/login/login.component.html -->
<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
  <div class="w-full max-w-6xl">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- Login Form Card -->
      <div class="lg:col-span-1">
        <mat-card class="shadow-xl">
          <mat-card-header class="text-center pb-4">
            <div class="w-full flex flex-col items-center">
              <img src="/assets/logos/town-council-logo.svg" alt="Logo" class="h-16 mb-4">
              <mat-card-title class="text-2xl font-bold text-gray-800">
                E-Procurement System
              </mat-card-title>
              <p class="text-sm text-gray-500 mt-2">Town Council of Singapore</p>
            </div>
          </mat-card-header>

          <mat-card-content>
            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <!-- Username Field -->
              <mat-form-field class="w-full" appearance="outline">
                <mat-label>Username</mat-label>
                <input matInput
                       formControlName="username"
                       placeholder="Enter your username"
                       autocomplete="username">
                <mat-icon matPrefix>person</mat-icon>
                <mat-error *ngIf="loginForm.get('username')?.hasError('required')">
                  Username is required
                </mat-error>
              </mat-form-field>

              <!-- Password Field -->
              <mat-form-field class="w-full" appearance="outline">
                <mat-label>Password</mat-label>
                <input matInput
                       [type]="hidePassword ? 'password' : 'text'"
                       formControlName="password"
                       placeholder="Enter your password"
                       autocomplete="current-password">
                <mat-icon matPrefix>lock</mat-icon>
                <button mat-icon-button
                        matSuffix
                        type="button"
                        (click)="hidePassword = !hidePassword"
                        [attr.aria-label]="'Hide password'"
                        [attr.aria-pressed]="hidePassword">
                  <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
                <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                  Password is required
                </mat-error>
              </mat-form-field>

              <!-- Remember Me -->
              <div class="flex items-center">
                <input type="checkbox"
                       id="rememberMe"
                       formControlName="rememberMe"
                       class="mr-2">
                <label for="rememberMe" class="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <!-- Login Button -->
              <button mat-raised-button
                      color="primary"
                      type="submit"
                      class="w-full h-12 text-lg"
                      [disabled]="!loginForm.valid">
                <mat-icon class="mr-2">login</mat-icon>
                LOGIN
              </button>
            </form>

            <div class="mt-4 text-center">
              <a href="#" class="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <mat-divider class="my-6"></mat-divider>

            <div class="text-center">
              <p class="text-sm text-gray-600 mb-2">Supplier?</p>
              <a href="#" class="text-blue-600 hover:underline font-medium">
                Register here
              </a>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Demo Accounts Panel -->
      <div class="lg:col-span-2">
        <mat-card class="shadow-xl">
          <mat-card-header>
            <mat-card-title class="flex items-center justify-between w-full">
              <div class="flex items-center gap-2">
                <mat-icon class="text-amber-500">science</mat-icon>
                <span>Demo Accounts - Quick Login</span>
              </div>
              <button mat-icon-button (click)="toggleDemoAccounts()">
                <mat-icon>{{ showDemoAccounts ? 'expand_less' : 'expand_more' }}</mat-icon>
              </button>
            </mat-card-title>
          </mat-card-header>

          <mat-card-content *ngIf="showDemoAccounts">
            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
              <div class="flex items-start">
                <mat-icon class="text-amber-600 mr-2">info</mat-icon>
                <div>
                  <p class="font-medium text-amber-800">Testing Environment</p>
                  <p class="text-sm text-amber-700 mt-1">
                    Click any account below to auto-fill login credentials and explore different user workflows.
                    All accounts use password: <code class="bg-amber-100 px-2 py-1 rounded">password123</code>
                  </p>
                </div>
              </div>
            </div>

            <!-- Staff Accounts -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <mat-icon class="text-blue-500">badge</mat-icon>
                Staff Accounts
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button *ngFor="let account of demoAccounts.slice(0, 4)"
                        mat-stroked-button
                        class="text-left p-4 h-auto hover:bg-blue-50 transition-colors"
                        (click)="fillDemoAccount(account)">
                  <div class="flex items-start gap-3">
                    <mat-icon [class]="'text-' + account.color + '-500'">
                      {{ account.icon }}
                    </mat-icon>
                    <div class="flex-1 min-w-0">
                      <div class="font-semibold text-gray-800">{{ account.name }}</div>
                      <div class="text-xs text-gray-500 mt-1">{{ account.role }}</div>
                      <div class="text-xs text-gray-600 mt-1">{{ account.description }}</div>
                      <div class="text-xs text-blue-600 mt-2 font-mono">{{ account.username }}</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Supplier Accounts -->
            <div>
              <h3 class="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <mat-icon class="text-green-500">store</mat-icon>
                Supplier Accounts
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button *ngFor="let account of demoAccounts.slice(3, 6)"
                        mat-stroked-button
                        class="text-left p-4 h-auto hover:bg-green-50 transition-colors"
                        (click)="fillDemoAccount(account)">
                  <div class="flex items-start gap-3">
                    <mat-icon class="text-green-500">
                      {{ account.icon }}
                    </mat-icon>
                    <div class="flex-1 min-w-0">
                      <div class="font-semibold text-gray-800 text-sm">{{ account.name }}</div>
                      <div class="text-xs text-gray-600 mt-1">{{ account.description }}</div>
                      <div class="text-xs text-green-600 mt-2 font-mono">{{ account.username }}</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Admin Account -->
            <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 class="text-sm font-semibold text-red-800 mb-2 flex items-center gap-2">
                <mat-icon class="text-red-500 text-sm">shield</mat-icon>
                Administrator Access
              </h3>
              <button *ngFor="let account of demoAccounts.slice(6)"
                      mat-stroked-button
                      color="warn"
                      class="text-left p-3 h-auto w-full hover:bg-red-100 transition-colors"
                      (click)="fillDemoAccount(account)">
                <div class="flex items-start gap-3">
                  <mat-icon class="text-red-500">{{ account.icon }}</mat-icon>
                  <div class="flex-1">
                    <div class="font-semibold text-gray-800">{{ account.name }}</div>
                    <div class="text-xs text-gray-600 mt-1">{{ account.description }}</div>
                    <div class="text-xs text-red-600 mt-2 font-mono">{{ account.username }}</div>
                  </div>
                </div>
              </button>
            </div>

            <!-- Workflow Suggestions -->
            <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 class="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <mat-icon class="text-blue-500 text-sm">lightbulb</mat-icon>
                Suggested Testing Workflows
              </h3>
              <ul class="text-xs text-blue-700 space-y-1 ml-6 list-disc">
                <li><strong>RFQ Creation:</strong> Login as Sarah Tan → Create RFQ → Approve as David Lim</li>
                <li><strong>Quotation Submission:</strong> Login as John Chen → Submit quotation to active RFQ</li>
                <li><strong>Evaluation:</strong> Login as Sarah Tan → Open quotations (assign Emily as witness) → Evaluate → Award</li>
                <li><strong>Multi-supplier:</strong> Submit quotations from all 3 suppliers → Compare side-by-side</li>
              </ul>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center mt-6 text-sm text-gray-600">
      <p>E-Procurement System v1.0 - Demo Environment</p>
      <p class="text-xs mt-1">© 2026 Town Council. All rights reserved.</p>
    </div>
  </div>
</div>
```

#### Login Component Styles

```css
/* src/app/features/auth/pages/login/login.component.css */
:host {
  display: block;
}

.mat-mdc-card {
  border-radius: 12px;
}

.mat-mdc-card-header {
  padding: 24px 24px 0 24px;
}

code {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
}

button[mat-stroked-button] {
  border-width: 1px;
  border-style: solid;
}

button[mat-stroked-button]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### 4.4 Role-Based Dashboard Redirection

After login, users are redirected to role-appropriate dashboards:

```typescript
// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { db, User } from '../database/db';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    this.loadCurrentUser();
  }

  private loadCurrentUser(): void {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      this.currentUserSubject.next(JSON.parse(userJson));
    }
  }

  login(username: string, password: string): Observable<boolean> {
    return from(db.users.where('username').equals(username).first()).pipe(
      map(user => {
        // In a real app, password would be hashed and verified
        if (user && password === 'password123') {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);

          // Redirect based on role
          this.redirectToDashboard(user.role);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  hasRole(roles: string[]): boolean {
    const user = this.currentUserSubject.value;
    return user ? roles.includes(user.role) : false;
  }

  private redirectToDashboard(role: string): void {
    switch (role) {
      case 'supplier':
        this.router.navigate(['/dashboard/supplier']);
        break;
      case 'admin':
        this.router.navigate(['/dashboard/admin']);
        break;
      case 'procurement_officer':
      case 'approving_authority':
      case 'witness':
        this.router.navigate(['/dashboard']);
        break;
      default:
        this.router.navigate(['/dashboard']);
    }
  }
}
```

### 4.5 Quick Account Switcher (In-App)

Add an account switcher in the top navigation for quick testing:

```typescript
// src/app/shared/layouts/app-layout/components/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule
  ],
  template: `
    <mat-toolbar color="primary" class="shadow-md">
      <button mat-icon-button (click)="toggleSidenav()">
        <mat-icon>menu</mat-icon>
      </button>

      <span class="flex-1 text-lg font-semibold">E-Procurement System</span>

      <!-- Quick Account Switcher (Demo Mode) -->
      <button mat-button [matMenuTriggerFor]="demoMenu" class="mr-4">
        <mat-icon class="text-amber-300">science</mat-icon>
        <span class="ml-2">Demo Mode</span>
      </button>
      <mat-menu #demoMenu="matMenu">
        <button mat-menu-item (click)="switchAccount('procurement1')">
          <mat-icon>assignment</mat-icon>
          <span>Sarah Tan (Procurement)</span>
        </button>
        <button mat-menu-item (click)="switchAccount('approver1')">
          <mat-icon>verified</mat-icon>
          <span>David Lim (Approver)</span>
        </button>
        <button mat-menu-item (click)="switchAccount('witness1')">
          <mat-icon>visibility</mat-icon>
          <span>Emily Wong (Witness)</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item (click)="switchAccount('supplier1')">
          <mat-icon>store</mat-icon>
          <span>John Chen (Supplier)</span>
        </button>
        <button mat-menu-item (click)="switchAccount('supplier2')">
          <mat-icon>construction</mat-icon>
          <span>Mary Lee (Supplier)</span>
        </button>
      </mat-menu>

      <!-- Notifications -->
      <button mat-icon-button [matMenuTriggerFor]="notificationMenu">
        <mat-icon [matBadge]="3" matBadgeColor="warn">notifications</mat-icon>
      </button>
      <mat-menu #notificationMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>assignment</mat-icon>
          <span>2 RFQs pending approval</span>
        </button>
        <button mat-menu-item>
          <mat-icon>schedule</mat-icon>
          <span>1 RFQ closing tomorrow</span>
        </button>
      </mat-menu>

      <!-- User Menu -->
      <button mat-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
        <span class="ml-2">{{ (currentUser$ | async)?.name }}</span>
        <mat-icon>arrow_drop_down</mat-icon>
      </button>
      <mat-menu #userMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>person</mat-icon>
          <span>Profile</span>
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          <span>Settings</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item (click)="logout()">
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `
})
export class HeaderComponent {
  currentUser$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleSidenav(): void {
    // Emit event to toggle sidenav
  }

  switchAccount(username: string): void {
    // Quick switch for demo purposes
    this.authService.login(username, 'password123').subscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
```

---

## 5. USER JOURNEYS (HAPPY PATH)

### 4.1 Journey 1: Procurement Officer Creates RFQ

**Steps**:
1. Login as Procurement Officer (Sarah Tan)
2. Navigate to Dashboard → See overview of active RFQs
3. Click "Create New RFQ" button
4. Fill in RFQ form:
   - Title: "Landscaping Services for 2026"
   - Category: "Services"
   - Description: Rich text editor with details
   - Budget: $80,000
   - Publish Date: Tomorrow
   - Close Date: 14 days from publish
   - Upload attachments (site plan, specifications)
5. Preview RFQ
6. Submit for approval
7. See success message with RFQ number
8. View RFQ in "Pending Approval" status

### 4.2 Journey 2: Approving Authority Approves RFQ

**Steps**:
1. Login as Approving Authority (David Lim)
2. See notification badge: "1 RFQ Pending Approval"
3. Click notification → Navigate to approval page
4. Review RFQ details
5. Add approval remarks (optional)
6. Click "Approve" button
7. See confirmation dialog
8. Confirm approval
9. See success message
10. RFQ status changes to "Approved" → Auto-publish on schedule

### 4.3 Journey 3: Supplier Submits Quotation

**Steps**:
1. Login as Supplier (John Chen - Acme Corporation)
2. View "Available RFQs" on dashboard
3. Click on RFQ: "Landscaping Services for 2026"
4. Review RFQ details and attachments
5. Click "Submit Quotation" button
6. Fill quotation form with line items
7. Review quotation summary
8. See "Encryption" animation (visual only)
9. Click "Submit Quotation"
10. See submission confirmation with quotation number
11. Download submission receipt (PDF)

### 4.4 Journey 4: Procurement Officer Opens Quotations

**Steps**:
1. RFQ close date reached (simulated)
2. Login as Procurement Officer (Sarah Tan)
3. Navigate to RFQ
4. See status: "Closed - Ready to Open"
5. Click "Open Quotations" button
6. System prompts: "Assign Witnessing Officer"
7. Select witnessing officer
8. See "Decryption in Progress" animation (visual only)
9. Quotations revealed
10. See "Quotations Opened Successfully" message
11. Audit log entry created

### 4.5 Journey 5: Evaluate and Award Quotation

**Steps**:
1. Continue as Procurement Officer
2. Navigate to "Evaluate" tab
3. View side-by-side comparison
4. Enter evaluation scores
5. Total score auto-calculates
6. Add evaluation remarks
7. Select recommended supplier
8. Click "Submit Recommendation"
9. Approving Authority reviews and approves
10. Click "Award Quotation"
11. See confirmation dialog
12. Confirm award
13. See success message

---

## 5. ANGULAR COMPONENTS STRUCTURE

### 5.1 Core Components

```typescript
// Component structure for Angular

1. Layout Components
   - AppLayoutComponent (with sidebar, header, footer)
   - DashboardLayoutComponent
   - AuthLayoutComponent
   - SidebarComponent
   - HeaderComponent
   - FooterComponent

2. Navigation Components
   - NavigationComponent
   - BreadcrumbsComponent
   - TabsComponent

3. Shared Components
   - StatusBadgeComponent
   - DataTableComponent
   - LoadingSpinnerComponent
   - ConfirmDialogComponent
   - EmptyStateComponent
   - FileUploadComponent

4. RFQ Components
   - RFQCardComponent
   - RFQFormComponent
   - RFQStepperComponent
   - RFQListComponent
   - RFQDetailComponent

5. Quotation Components
   - QuotationFormComponent
   - QuotationCardComponent
   - ComparisonTableComponent
   - ScoringMatrixComponent
   - EncryptionIndicatorComponent

6. Animation Components
   - EncryptionAnimationComponent
   - DecryptionAnimationComponent
```

### 5.2 Sample Component: StatusBadgeComponent

```typescript
// src/app/shared/components/status-badge/status-badge.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../utils/cn.util';

type Status =
  | 'draft'
  | 'published'
  | 'closed'
  | 'evaluated'
  | 'awarded'
  | 'submitted'
  | 'approved'
  | 'pending'
  | 'rejected';

interface StatusConfig {
  label: string;
  className: string;
}

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClass">
      {{ config.label }}
    </span>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class StatusBadgeComponent {
  @Input() status!: Status;
  @Input() className?: string;

  private readonly statusConfig: Record<Status, StatusConfig> = {
    draft: {
      label: 'Draft',
      className: 'bg-gray-100 text-gray-700 border border-gray-300'
    },
    published: {
      label: 'Published',
      className: 'bg-blue-500 text-white hover:bg-blue-600'
    },
    closed: {
      label: 'Closed',
      className: 'bg-orange-500 text-white hover:bg-orange-600'
    },
    evaluated: {
      label: 'Evaluated',
      className: 'bg-indigo-500 text-white hover:bg-indigo-600'
    },
    awarded: {
      label: 'Awarded',
      className: 'bg-green-500 text-white hover:bg-green-600'
    },
    submitted: {
      label: 'Submitted',
      className: 'bg-blue-500 text-white hover:bg-blue-600'
    },
    approved: {
      label: 'Approved',
      className: 'bg-green-500 text-white hover:bg-green-600'
    },
    pending: {
      label: 'Pending',
      className: 'bg-yellow-500 text-white hover:bg-yellow-600'
    },
    rejected: {
      label: 'Rejected',
      className: 'bg-red-500 text-white hover:bg-red-600'
    }
  };

  get config(): StatusConfig {
    return this.statusConfig[this.status];
  }

  get badgeClass(): string {
    return cn(
      'inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      this.config.className,
      this.className
    );
  }
}
```

### 5.3 Sample Component: RFQCardComponent

```typescript
// src/app/features/rfq/components/rfq-card/rfq-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StatusBadgeComponent } from '@shared/components/status-badge/status-badge.component';
import { format } from 'date-fns';

interface RFQCard {
  rfqNumber: string;
  title: string;
  status: 'draft' | 'published' | 'closed' | 'evaluated' | 'awarded';
  closeDate: Date;
  budget: number;
  quotationCount?: number;
}

@Component({
  selector: 'app-rfq-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StatusBadgeComponent
  ],
  template: `
    <mat-card class="hover:shadow-lg transition-shadow cursor-pointer">
      <mat-card-header>
        <div class="flex items-start justify-between w-full">
          <div class="flex-1">
            <p class="text-sm text-gray-500 mb-1">{{ rfq.rfqNumber }}</p>
            <mat-card-title class="text-lg">{{ rfq.title }}</mat-card-title>
          </div>
          <app-status-badge [status]="rfq.status"></app-status-badge>
        </div>
      </mat-card-header>
      <mat-card-content class="space-y-2 mt-4">
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <mat-icon class="text-sm">calendar_today</mat-icon>
          <span>Closes: {{ formatDate(rfq.closeDate) }}</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <mat-icon class="text-sm">attach_money</mat-icon>
          <span>Budget: {{ formatCurrency(rfq.budget) }}</span>
        </div>
        <div *ngIf="rfq.quotationCount !== undefined"
             class="flex items-center gap-2 text-sm text-gray-600">
          <mat-icon class="text-sm">description</mat-icon>
          <span>Quotations: {{ rfq.quotationCount }}</span>
        </div>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary"
                class="w-full"
                (click)="onViewClick()">
          View Details
        </button>
      </mat-card-actions>
    </mat-card>
  `
})
export class RFQCardComponent {
  @Input() rfq!: RFQCard;
  @Output() viewDetails = new EventEmitter<void>();

  formatDate(date: Date): string {
    return format(date, 'dd MMM yyyy');
  }

  formatCurrency(amount: number): string {
    return `$${amount.toLocaleString()}`;
  }

  onViewClick(): void {
    this.viewDetails.emit();
  }
}
```

### 5.4 Sample Service: RFQService

```typescript
// src/app/core/services/rfq.service.ts
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
    return from(db.rfqs.add(rfq as RFQ));
  }

  updateRFQ(id: number, updates: Partial<RFQ>): Observable<number> {
    return from(db.rfqs.update(id, updates));
  }

  deleteRFQ(id: number): Observable<void> {
    return from(db.rfqs.delete(id));
  }

  getRFQsByStatus(status: RFQ['status']): Observable<RFQ[]> {
    return from(db.rfqs.where('status').equals(status).toArray());
  }
}
```

---

## 6. ANIMATIONS

### 6.1 Encryption Animation Component

```typescript
// src/app/shared/components/encryption-animation/encryption-animation.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-encryption-animation',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatIconModule],
  template: `
    <div class="flex flex-col items-center gap-6 p-8">
      <!-- Animated lock icon -->
      <div class="relative">
        <div [class]="iconWrapperClass">
          <mat-icon [class]="iconClass">
            {{ progress < 100 ? 'lock' : 'check_circle' }}
          </mat-icon>
        </div>
      </div>

      <!-- Status text -->
      <div class="text-center space-y-2">
        <h3 class="text-xl font-semibold">
          {{ progress < 100 ? 'Encrypting quotation...' : 'Encryption complete!' }}
        </h3>
        <p class="text-sm text-gray-500">{{ progress }}%</p>
      </div>

      <!-- Progress bar -->
      <div class="w-full max-w-xs space-y-2">
        <mat-progress-bar
          mode="determinate"
          [value]="progress"
          [color]="progress < 100 ? 'primary' : 'accent'">
        </mat-progress-bar>
        <p class="text-xs text-center text-gray-500">
          {{ progress < 100
            ? 'Securing your quotation data...'
            : 'Your quotation is now encrypted and secure' }}
        </p>
      </div>
    </div>
  `,
  styles: [`
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-bounce {
      animation: bounce 1s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  `]
})
export class EncryptionAnimationComponent implements OnInit, OnDestroy {
  progress = 0;
  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = interval(200)
      .pipe(takeWhile(() => this.progress < 100))
      .subscribe(() => {
        this.progress += 10;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get iconWrapperClass(): string {
    return `rounded-full p-6 transition-all duration-300 ${
      this.progress < 100
        ? 'bg-blue-100 animate-pulse'
        : 'bg-green-100'
    }`;
  }

  get iconClass(): string {
    return `text-5xl ${
      this.progress < 100
        ? 'text-blue-600 animate-bounce'
        : 'text-green-600'
    }`;
  }
}
```

---

## 7. ROUTING CONFIGURATION

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./shared/layouts/app-layout/app-layout.component')
        .then(m => m.AppLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'rfqs',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/rfq/pages/rfq-list/rfq-list.component')
                .then(m => m.RFQListComponent)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('./features/rfq/pages/create-rfq/create-rfq.component')
                .then(m => m.CreateRFQComponent)
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./features/rfq/pages/rfq-detail/rfq-detail.component')
                .then(m => m.RFQDetailComponent)
          },
          {
            path: ':id/open',
            loadComponent: () =>
              import('./features/rfq/pages/open-quotations/open-quotations.component')
                .then(m => m.OpenQuotationsComponent)
          },
          {
            path: ':id/evaluate',
            loadComponent: () =>
              import('./features/rfq/pages/evaluate-quotations/evaluate-quotations.component')
                .then(m => m.EvaluateQuotationsComponent)
          }
        ]
      },
      {
        path: 'quotations',
        children: [
          {
            path: ':rfqId/submit',
            loadComponent: () =>
              import('./features/quotation/pages/submit-quotation/submit-quotation.component')
                .then(m => m.SubmitQuotationComponent)
          }
        ]
      },
      {
        path: 'suppliers',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/supplier/pages/supplier-list/supplier-list.component')
                .then(m => m.SupplierListComponent)
          },
          {
            path: 'register',
            loadComponent: () =>
              import('./features/supplier/pages/supplier-registration/supplier-registration.component')
                .then(m => m.SupplierRegistrationComponent)
          }
        ]
      },
      {
        path: 'audit-logs',
        loadComponent: () =>
          import('./features/audit/pages/audit-logs/audit-logs.component')
            .then(m => m.AuditLogsComponent)
      }
    ]
  }
];
```

---

## 8. PROJECT STRUCTURE

```
e-procurement-mockup-angular/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── database/
│   │   │   │   ├── db.ts
│   │   │   │   └── seed-data.service.ts
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   └── http.interceptor.ts
│   │   │   └── services/
│   │   │       ├── auth.service.ts
│   │   │       ├── rfq.service.ts
│   │   │       ├── quotation.service.ts
│   │   │       └── audit.service.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── status-badge/
│   │   │   │   ├── data-table/
│   │   │   │   ├── loading-spinner/
│   │   │   │   ├── encryption-animation/
│   │   │   │   ├── decryption-animation/
│   │   │   │   └── file-upload/
│   │   │   ├── layouts/
│   │   │   │   ├── app-layout/
│   │   │   │   ├── auth-layout/
│   │   │   │   └── dashboard-layout/
│   │   │   ├── utils/
│   │   │   │   ├── cn.util.ts
│   │   │   │   ├── formatters.ts
│   │   │   │   └── validators.ts
│   │   │   └── material.module.ts
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── login/
│   │   │   │   │   └── forgot-password/
│   │   │   │   └── components/
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── pages/
│   │   │   │   │   └── dashboard/
│   │   │   │   └── components/
│   │   │   │       ├── stat-card/
│   │   │   │       └── recent-rfqs/
│   │   │   │
│   │   │   ├── rfq/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── rfq-list/
│   │   │   │   │   ├── rfq-detail/
│   │   │   │   │   ├── create-rfq/
│   │   │   │   │   ├── open-quotations/
│   │   │   │   │   └── evaluate-quotations/
│   │   │   │   └── components/
│   │   │   │       ├── rfq-card/
│   │   │   │       ├── rfq-form/
│   │   │   │       └── rfq-stepper/
│   │   │   │
│   │   │   ├── quotation/
│   │   │   │   ├── pages/
│   │   │   │   │   └── submit-quotation/
│   │   │   │   └── components/
│   │   │   │       ├── quotation-form/
│   │   │   │       ├── quotation-card/
│   │   │   │       ├── comparison-table/
│   │   │   │       └── scoring-matrix/
│   │   │   │
│   │   │   ├── supplier/
│   │   │   │   ├── pages/
│   │   │   │   │   ├── supplier-list/
│   │   │   │   │   └── supplier-registration/
│   │   │   │   └── components/
│   │   │   │
│   │   │   └── audit/
│   │   │       ├── pages/
│   │   │       │   └── audit-logs/
│   │   │       └── components/
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── avatars/
│   │
│   ├── styles.css
│   ├── index.html
│   └── main.ts
│
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

---

## 9. QUICK START GUIDE

### 9.1 Installation

```bash
# Step 1: Create Angular project
ng new e-procurement-mockup-angular --routing --style=css --standalone

# Step 2: Navigate to project
cd e-procurement-mockup-angular

# Step 3: Install core dependencies
npm install dexie
npm install date-fns
npm install lucide-angular
npm install class-variance-authority clsx tailwind-merge
npm install @faker-js/faker -D

# Step 4: Install Tailwind CSS v4 (check docs for latest version)
npm install tailwindcss@next autoprefixer postcss -D
npm install @tailwindcss/typography @tailwindcss/forms -D

# Step 5: Add Angular Material
ng add @angular/material

# Step 6: Install ngx-charts for data visualization
npm install @swimlane/ngx-charts

# Step 7: Initialize Tailwind CSS
npx tailwindcss init -p

# Step 8: Update src/styles.css with Tailwind v4 syntax
# (See Section 2.3 for complete CSS configuration)

# Step 9: Start development server
ng serve
```

### 9.2 Initialize Database

```typescript
// In app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { APP_INITIALIZER } from '@angular/core';
import { SeedDataService } from './core/database/seed-data.service';
import { db } from './core/database/db';

function initializeApp(seedDataService: SeedDataService) {
  return async () => {
    const userCount = await db.users.count();
    if (userCount === 0) {
      await seedDataService.seedDatabase();
      console.log('✅ Database initialized with demo data');
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SeedDataService],
      multi: true
    }
  ]
};
```

### 9.3 Run Application

```bash
ng serve
```

Navigate to `http://localhost:4200`

**Demo Login**:
The login screen includes quick-access buttons for all demo accounts. See **Section 4.2** for the complete list of demo accounts and their purposes.

**Quick Reference**:
- All demo accounts use password: `password123`
- Click any demo account button on the login screen to auto-fill credentials
- Primary test accounts:
  - Procurement: `procurement1` (Sarah Tan)
  - Approver: `approver1` (David Lim)
  - Supplier: `supplier1` (John Chen - Acme Corp)

---

## 10. DEVELOPMENT TIMELINE

### Week 1: Setup & Foundation
**Days 1-2**: Project Setup
- Initialize Angular project with standalone components
- Install dependencies (Angular Material, Dexie, etc.)
- Setup project structure
- Configure Tailwind CSS v4

**Days 3-5**: Data Layer & Services
- Setup Dexie database schema
- Create seed data service
- Build core services (Auth, RFQ, Quotation)
- Create shared components library

### Week 2: Core Pages
**Days 1-2**: Authentication & Dashboard
- Login page with auto-fill demo account buttons (11 accounts)
- Role-based dashboard redirection
- Staff dashboard with metrics
- Supplier dashboard
- Basic routing and navigation
- Quick account switcher in header (for demo/testing)

**Days 3-5**: RFQ Management
- RFQ list view
- RFQ detail view
- Create RFQ flow (using mat-stepper)
- RFQ card component

### Week 3: Quotation Features
**Days 1-2**: Quotation Submission
- Supplier quotation form
- Line item management
- File upload component
- Encryption animation

**Days 3-5**: Opening & Evaluation
- Quotation opening workflow
- Decryption animation
- Comparison table
- Scoring matrix
- Award workflow

### Week 4: Polish & Demo
**Days 1-2**: Visual Polish
- Responsive design refinements
- Animation polishing
- Loading states
- Empty states

**Days 3-4**: Demo Preparation
- Create demo script
- Populate demo data
- Test all workflows
- Bug fixes

**Day 5**: Final Review
- User testing
- Documentation
- Deployment preparation

---

## 11. KEY DIFFERENCES FROM REACT VERSION

### 11.1 State Management
- **React**: Zustand or Context API
- **Angular**: Services with RxJS BehaviorSubjects/Observables

### 11.2 Forms
- **React**: React Hook Form + Zod
- **Angular**: Angular Reactive Forms with built-in validators

### 11.3 Routing
- **React**: React Router v6
- **Angular**: Angular Router (built-in)

### 11.4 Component Structure
- **React**: Function components with hooks
- **Angular**: Class-based or standalone components with decorators

### 11.5 UI Library
- **React**: shadcn/ui (Radix UI primitives)
- **Angular**: Angular Material (official Google Material Design)

### 11.6 Animations
- **React**: Framer Motion
- **Angular**: Angular Animations (built-in)

---

## 12. BROWSER COMPATIBILITY

**Supported Browsers**:
- Chrome 90+
- Edge 90+
- Firefox 88+
- Safari 14+

**Not Supported**:
- Internet Explorer (all versions)

---

## 13. PERFORMANCE TARGETS

- **Initial Load**: < 2 seconds
- **Page Transitions**: < 500ms
- **Form Submission**: < 1 second (with animation)
- **Data Table Rendering**: < 500ms for 100 rows

---

## 14. ACCESSIBILITY

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus indicators
- Sufficient color contrast (WCAG AA)
- Screen reader friendly

---

## 15. FUTURE ENHANCEMENTS (Post-Mockup)

- Backend API integration
- Real authentication system
- Email notifications
- PDF generation
- Advanced reporting
- Mobile app
- Multi-language support (i18n)
- Dark mode

---

## APPENDIX A: Angular-Specific Best Practices

### Change Detection Strategy
```typescript
@Component({
  selector: 'app-rfq-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // ...
})
```

### Standalone Components
```typescript
@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, ...],
  // ...
})
```

### Lazy Loading
```typescript
{
  path: 'rfqs',
  loadComponent: () => import('./features/rfq/...').then(m => m.RFQListComponent)
}
```

### Signals (Angular 17+)
```typescript
import { signal, computed } from '@angular/core';

export class RFQComponent {
  rfqs = signal<RFQ[]>([]);
  activeRfqs = computed(() => this.rfqs().filter(r => r.status === 'published'));
}
```

---

## APPENDIX B: Demo Features Summary

### Key Demo Features

This Angular mockup includes comprehensive demo/testing features to facilitate easy exploration of all user workflows:

#### 1. **Enhanced Login Screen**
- **11 Pre-configured Demo Accounts** across all roles
- **One-Click Auto-Fill**: Click any demo account to instantly fill credentials
- **Visual Role Grouping**: Staff accounts and supplier accounts clearly separated
- **Workflow Suggestions**: Built-in testing workflow recommendations
- **Responsive Design**: Works seamlessly on mobile and desktop

#### 2. **Demo Account Categories**

**Staff Accounts (7)**:
- 1 Admin (full system access)
- 2 Procurement Officers (primary workflow testing)
- 2 Approving Authorities (approval workflow)
- 2 Witness Officers (quotation opening)

**Supplier Accounts (4)**:
- 3 Active suppliers with transaction history
- 1 New supplier (first-time user experience)

#### 3. **In-App Quick Switcher**
- **Header Menu**: Switch between accounts without logging out
- **Demo Mode Indicator**: Amber icon shows testing environment
- **Fast Context Switching**: Test multi-user workflows rapidly

#### 4. **Pre-Populated Sample Data**
Each account includes realistic sample data:
- **Procurement Officers**: 5-8 RFQs in various stages
- **Approvers**: 2-3 pending approvals
- **Suppliers**: 6-10 submitted quotations
- **Witness Officers**: Scheduled opening assignments

#### 5. **Guided Testing Paths**
Built-in workflow suggestions on login screen:
- ✅ Complete RFQ lifecycle (Create → Approve → Publish)
- ✅ Multi-supplier quotation submission
- ✅ Quotation opening with witness
- ✅ Comparative evaluation and award

#### 6. **Universal Password**
All demo accounts use: `password123`
- Simplifies testing and demonstrations
- Clearly marked as demo/testing environment
- Easy to remember and share

### Quick Start for Developers

```bash
# 1. Clone and install
git clone <repository>
cd e-procurement-mockup-angular
npm install

# 2. Start development server
ng serve

# 3. Open browser
http://localhost:4200

# 4. Click any demo account button on login screen
# No need to remember credentials - just click and go!
```

### Quick Start for Stakeholders

1. **Open Application**: Navigate to `http://localhost:4200`
2. **Select Role**: Click any demo account button
3. **Explore**: Credentials auto-filled, just click "LOGIN"
4. **Test Workflows**: Follow suggested testing paths
5. **Switch Users**: Use demo mode switcher in header

### Visual Login Screen Preview

```
┌─────────────────────────────────────────────────────────────┐
│  [Login Form]          [Demo Accounts Panel]                │
│                                                              │
│  Username: _______     ⚗️ Demo Accounts - Quick Login       │
│  Password: _______                                          │
│                        STAFF ACCOUNTS                        │
│  [ ] Remember me       ┌──────────┐ ┌──────────┐           │
│                        │ Sarah Tan│ │ David Lim│           │
│  [LOGIN BUTTON]        │ Procure. │ │ Approver │           │
│                        └──────────┘ └──────────┘           │
│  Forgot Password?      ┌──────────┐ ┌──────────┐           │
│  ─────────────         │Emily Wong│ │ Admin    │           │
│  Supplier?             │ Witness  │ │ Admin    │           │
│  Register here         └──────────┘ └──────────┘           │
│                                                              │
│                        SUPPLIER ACCOUNTS                     │
│                        ┌────────┐ ┌────────┐ ┌────────┐   │
│                        │John C. │ │Mary L. │ │Kumar R.│   │
│                        │Acme    │ │Builders│ │Global  │   │
│                        └────────┘ └────────┘ └────────┘   │
│                                                              │
│                        💡 Suggested Testing Workflows        │
│                        • RFQ Creation: Sarah → David        │
│                        • Submission: John → Submit quote    │
│                        • Evaluation: Sarah → Open → Award   │
└─────────────────────────────────────────────────────────────┘
```

### Testing Scenarios by Role

#### As Procurement Officer (Sarah Tan)
```typescript
Login → Dashboard
  → Create New RFQ
  → View Pending Approvals
  → Open Quotations (after close date)
  → Evaluate & Score
  → Submit Award Recommendation
```

#### As Approving Authority (David Lim)
```typescript
Login → Notifications (2 pending)
  → Review RFQ Details
  → Approve/Reject RFQ
  → Review Award Recommendations
  → Approve Awards
```

#### As Supplier (John Chen - Acme)
```typescript
Login → Available RFQs
  → View RFQ Details
  → Download Attachments
  → Submit Quotation
  → Track Submission Status
  → View Award Results
```

#### As Witness (Emily Wong)
```typescript
Login → Assigned Openings
  → Attend Opening Ceremony
  → Verify Sealed Submissions
  → Co-sign Opening Records
  → View Audit Trail
```

### Benefits of Demo Account System

✅ **Zero Configuration**: No manual account setup required
✅ **Instant Testing**: One-click access to any user role
✅ **Realistic Data**: Pre-populated with sample transactions
✅ **Complete Workflows**: Test end-to-end processes
✅ **Multi-Role Testing**: Quickly switch between perspectives
✅ **Stakeholder Demos**: Non-technical users can explore easily
✅ **Developer Efficiency**: Rapid testing during development
✅ **Documentation**: Self-documenting with descriptions

---

**Document Version**: 1.0 (Angular)
**Last Updated**: 2026-01-30
**Framework**: Angular 17+

**END OF SPECIFICATION**
