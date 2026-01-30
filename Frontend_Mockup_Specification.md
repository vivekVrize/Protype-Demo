# E-Procurement System - Frontend Mockup Specification
## Visual Prototype (Happy Path Only)

**Project**: Town Council E-Procurement System - UI/UX Demo
**Version**: 1.0
**Date**: 2026-01-30
**Purpose**: Demonstrate user interface and workflows without backend infrastructure

---

## ⚠️ IMPORTANT - Tailwind CSS v4 Notice

**This specification uses Tailwind CSS v4 with shadcn/ui. Before starting development:**

1. **Check Latest Documentation**: https://tailwindcss.com/docs
2. **V4 Beta/Stable Status**: https://github.com/tailwindlabs/tailwindcss/releases
3. **Migration Guide**: https://tailwindcss.com/docs/upgrade-guide
4. **shadcn/ui Docs**: https://ui.shadcn.com/docs

**Key Changes in Tailwind v4:**
- CSS-first configuration using `@import "tailwindcss"` and `@theme` directive
- Native CSS features for better performance
- Updated plugin system
- New color system with oklch color space support

**Always verify installation steps with official documentation as v4 may introduce breaking changes.**

---

## 1. MOCKUP OVERVIEW

### 1.1 Objective
Create an interactive frontend mockup to demonstrate the user experience and core workflows of the e-Procurement system. This is a visual prototype showing the "happy path" - ideal scenarios without error handling or edge cases.

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
```javascript
{
  "framework": "React 18",
  "language": "TypeScript",
  "buildTool": "Vite",
  "styling": "Tailwind CSS v4 + shadcn/ui",
  "routing": "React Router v6",
  "stateManagement": "Zustand or React Context",
  "forms": "React Hook Form + Zod validation",
  "dataStorage": "Dexie.js (IndexedDB)"
}
```

### 2.2 Key Libraries
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "dexie": "^3.2.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "date-fns": "^2.30.0",
    "recharts": "^2.10.0",
    "lucide-react": "^0.300.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-slot": "^1.0.2"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "@tailwindcss/typography": "^0.5.10",
    "@tailwindcss/forms": "^0.5.7",
    "@faker-js/faker": "^8.3.0"
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

Create `src/index.css` with v4 syntax:
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
export default {
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
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
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

**Step 5: Vite Configuration**

Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Step 6: TypeScript Path Aliases**

Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

### 2.4 shadcn/ui Setup

**shadcn/ui** provides beautifully designed components built with Radix UI and Tailwind CSS.

**Official Documentation**: https://ui.shadcn.com/docs

#### Initialize shadcn/ui

```bash
# Run the initialization command
npx shadcn@latest init

# You'll be prompted with questions:
# ✔ Would you like to use TypeScript? … yes
# ✔ Which style would you like to use? › Default
# ✔ Which color would you like to use as base color? › Slate
# ✔ Where is your global CSS file? … src/index.css
# ✔ Would you like to use CSS variables for colors? … yes
# ✔ Where is your tailwind.config.js located? … tailwind.config.ts
# ✔ Configure the import alias for components: … @/components
# ✔ Configure the import alias for utils: … @/lib/utils
# ✔ Are you using React Server Components? … no
```

This creates:
- `components.json` - shadcn/ui configuration file
- `src/lib/utils.ts` - Utility functions (including the `cn` helper)
- Updates your CSS and Tailwind config

#### Install Components

Add components individually as needed:
```bash
# Core components for our e-procurement system
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add alert
npx shadcn@latest add toast
npx shadcn@latest add tabs
npx shadcn@latest add select
npx shadcn@latest add calendar
npx shadcn@latest add form
npx shadcn@latest add progress
npx shadcn@latest add separator
npx shadcn@latest add avatar
npx shadcn@latest add skeleton
npx shadcn@latest add checkbox
npx shadcn@latest add label
npx shadcn@latest add textarea
npx shadcn@latest add switch
npx shadcn@latest add radio-group
npx shadcn@latest add scroll-area
npx shadcn@latest add tooltip
npx shadcn@latest add popover
```

**OR install all components at once:**
```bash
npx shadcn@latest add --all
```

#### Verify Installation

Check that `src/lib/utils.ts` exists:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Check that components are in `src/components/ui/`, for example `button.tsx`:
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

### 2.5 Development Tools
- **Node.js**: v18+
- **Package Manager**: npm or pnpm
- **Code Editor**: VS Code
- **Browser**: Chrome/Edge (latest)

---

## 3. DATA STORAGE STRATEGY

### 3.1 Dexie.js Schema

```typescript
// db.ts
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

### 3.2 Seed Data Generator

```typescript
// seedData.ts
import { db, User, RFQ, Quotation } from './db';

export async function seedDatabase() {
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
    },
    {
      id: 3,
      rfqNumber: 'RFQ-2026-003',
      title: 'Security Guard Services',
      description: '24/7 security guard services for 3 blocks...',
      category: 'Services',
      budget: 120000,
      createdBy: 2,
      createdAt: new Date('2026-01-28'),
      publishDate: new Date('2026-01-30'),
      closeDate: new Date('2026-02-20'),
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
    },
    {
      id: 2,
      rfqId: 1,
      supplierId: 6,
      quotationNumber: 'QTN-2026-001-002',
      submittedAt: new Date('2026-02-06 10:15:00'),
      status: 'submitted',
      totalAmount: 245000,
      isAlternative: false,
      lineItems: [
        {
          itemNo: 1,
          description: 'Lift upgrading works',
          quantity: 4,
          unitPrice: 60000,
          totalPrice: 240000
        },
        {
          itemNo: 2,
          description: 'Maintenance (1 year)',
          quantity: 1,
          unitPrice: 5000,
          totalPrice: 5000
        }
      ]
    }
  ];

  await db.quotations.bulkAdd(quotations);

  console.log('✅ Database seeded successfully');
}
```

---

## 4. USER JOURNEYS (HAPPY PATH)

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
4. Review RFQ details:
   - View all fields
   - Check budget
   - Review attachments
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
6. Fill quotation form:
   - Add line items (description, quantity, unit price)
   - Total auto-calculates
   - Add delivery timeline
   - Upload supporting documents (company profile, certifications)
7. Review quotation summary
8. See "Encryption" animation (visual only)
9. Click "Submit Quotation"
10. See submission confirmation with:
    - Quotation number
    - Timestamp
    - Encrypted badge
11. Download submission receipt (PDF)

### 4.4 Journey 4: Procurement Officer Opens Quotations

**Steps**:
1. RFQ close date reached (simulated)
2. Login as Procurement Officer (Sarah Tan)
3. Navigate to RFQ: "Landscaping Services for 2026"
4. See status: "Closed - Ready to Open"
5. Click "Open Quotations" button
6. System prompts: "Assign Witnessing Officer"
7. Select: Emily Wong (cannot select self)
8. See "Decryption in Progress" animation (visual only)
9. Quotations revealed:
   - Supplier names
   - Submission timestamps
   - Total amounts (summary only)
10. See "Quotations Opened Successfully" message
11. Audit log entry created (visible in audit trail)

### 4.5 Journey 5: Evaluate and Award Quotation

**Steps**:
1. Continue as Procurement Officer
2. Navigate to "Evaluate" tab
3. View side-by-side comparison:
   - Supplier details
   - Line items
   - Total amounts
   - Delivery timelines
4. Enter evaluation scores:
   - Price score (auto-calculated)
   - Technical score (manual input)
   - Delivery score (manual input)
5. Total score auto-calculates (weighted)
6. Add evaluation remarks for each quotation
7. Select recommended supplier
8. Click "Submit Recommendation"
9. Approving Authority reviews and approves
10. Click "Award Quotation"
11. See confirmation dialog
12. Confirm award
13. See success message: "Award notifications sent to all suppliers"
14. View award letter preview

---

## 5. SCREEN LAYOUTS

### 5.1 Login Screen

```
┌─────────────────────────────────────────────┐
│                                             │
│          [Town Council Logo]                │
│                                             │
│     E-Procurement System                    │
│                                             │
│     ┌─────────────────────────────┐        │
│     │ Username                    │        │
│     └─────────────────────────────┘        │
│                                             │
│     ┌─────────────────────────────┐        │
│     │ Password            [👁]     │        │
│     └─────────────────────────────┘        │
│                                             │
│     [ ] Remember me                         │
│                                             │
│     ┌─────────────────────────────┐        │
│     │        LOGIN                │        │
│     └─────────────────────────────┘        │
│                                             │
│     Forgot Password?                        │
│                                             │
│     ────────────────────────────            │
│                                             │
│     Supplier? Register here                 │
│                                             │
└─────────────────────────────────────────────┘
```

**Demo Users Quick Select**:
- Procurement Officer (Sarah)
- Approving Authority (David)
- Supplier (John - Acme Corp)

### 5.2 Dashboard - Procurement Officer

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo] E-Procurement          [🔔 3]  [👤 Sarah Tan ▼]      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Dashboard  |  RFQs  |  Suppliers  |  Reports  |  Audit     │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Welcome back, Sarah                                         │
│                                                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Active    │ │   Pending   │ │   Closed    │           │
│  │    RFQs     │ │  Approval   │ │    RFQs     │           │
│  │      8      │ │      2      │ │     15      │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │  Recent RFQs                [+ Create New RFQ] │         │
│  ├────────────────────────────────────────────────┤         │
│  │  RFQ-2026-001  Lift Upgrading Works            │         │
│  │  Status: Published  |  Closes: 10 Feb 2026     │         │
│  │  Budget: $250,000   |  Quotations: 3           │         │
│  │                                        [View >] │         │
│  ├────────────────────────────────────────────────┤         │
│  │  RFQ-2026-002  Cleaning Services Q1            │         │
│  │  Status: Published  |  Closes: 15 Feb 2026     │         │
│  │  Budget: $45,000    |  Quotations: 5           │         │
│  │                                        [View >] │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │  Quick Actions                                 │         │
│  │  • Create RFQ                                  │         │
│  │  • View Pending Approvals                      │         │
│  │  • Generate Report                             │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 5.3 Create RFQ Form

```
┌──────────────────────────────────────────────────────────────┐
│  Create New RFQ                              [Save Draft] [X]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ○──○──○──○  (Stepper: Details → Items → Review → Submit)  │
│  1  2  3  4                                                  │
│                                                              │
│  Step 1: RFQ Details                                         │
│                                                              │
│  ┌──────────────────────────────────────────┐               │
│  │ RFQ Title *                              │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│  ┌──────────────────────────────────────────┐               │
│  │ Category *                    [▼]        │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│  ┌──────────────────────────────────────────┐               │
│  │ Description *                            │               │
│  │                                          │               │
│  │ [B] [I] [U] [Link] [List] [Table]       │               │
│  │                                          │               │
│  │                                          │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│  Budget (SGD) *     Publish Date *      Close Date *        │
│  ┌──────────┐     ┌──────────┐        ┌──────────┐         │
│  │ $        │     │ 📅       │        │ 📅       │         │
│  └──────────┘     └──────────┘        └──────────┘         │
│                                                              │
│  Attachments                                                 │
│  ┌──────────────────────────────────────────┐               │
│  │  Drag & drop files here or click to      │               │
│  │  browse                                   │               │
│  │                                           │               │
│  │  📄 Specifications.pdf (2.3 MB)  [x]     │               │
│  │  📄 Site_Plan.dwg (5.1 MB)       [x]     │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│                            [Cancel]  [Next: Items →]         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 5.4 Quotation Submission (Supplier View)

```
┌──────────────────────────────────────────────────────────────┐
│  Submit Quotation - RFQ-2026-003                        [X] │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  RFQ: Security Guard Services                                │
│  Closing: 20 Feb 2026, 5:00 PM (⏰ 5 days remaining)        │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │  Line Items                      [+ Add Item]  │         │
│  ├────────────────────────────────────────────────┤         │
│  │  #  Description      Qty   Unit Price  Total   │         │
│  ├────────────────────────────────────────────────┤         │
│  │  1  Security Guard   3    $3,500     $10,500   │         │
│  │     (8hr shift)                                │         │
│  │                                         [Edit]  │         │
│  ├────────────────────────────────────────────────┤         │
│  │  2  Supervisor       1    $4,200     $4,200    │         │
│  │                                         [Edit]  │         │
│  ├────────────────────────────────────────────────┤         │
│  │  3  Equipment        1    $2,000     $2,000    │         │
│  │     (Radios, etc)                              │         │
│  │                                         [Edit]  │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│  Subtotal:                            $16,700               │
│  GST (9%):                            $1,503                │
│  ─────────────────────────────────────────────              │
│  Total Amount (SGD):                  $18,203               │
│                                                              │
│  Delivery Timeline                                           │
│  ┌──────────────────────────────────────────┐               │
│  │ 14 days from award                       │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│  Attachments                                                 │
│  ┌──────────────────────────────────────────┐               │
│  │  📄 Company_Profile.pdf (1.2 MB)  [x]    │               │
│  │  📄 Certifications.pdf (0.8 MB)   [x]    │               │
│  │  [+ Upload More]                         │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│  Remarks (Optional)                                          │
│  ┌──────────────────────────────────────────┐               │
│  │                                          │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│  [ ] Submit as Alternative Quotation                         │
│                                                              │
│  🔒 Your quotation will be encrypted and cannot be          │
│      modified after submission                               │
│                                                              │
│              [Cancel]  [Preview]  [Submit Quotation]         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 5.5 Quotation Opening Screen

```
┌──────────────────────────────────────────────────────────────┐
│  Open Quotations - RFQ-2026-001                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  RFQ: Lift Upgrading Works - Block 123                       │
│  Status: Closed on 10 Feb 2026, 5:00 PM                     │
│  Total Quotations Received: 3                                │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │  ⚠️ Quotation Opening Requires Authorization   │         │
│  │                                                │         │
│  │  Authorized Officer: Sarah Tan (You)           │         │
│  │                                                │         │
│  │  Witnessing Officer *                          │         │
│  │  ┌──────────────────────────────────┐         │         │
│  │  │ Select Officer          [▼]      │         │         │
│  │  └──────────────────────────────────┘         │         │
│  │  Options: Emily Wong, Rachel Koh               │         │
│  │  (Procurement officers excluded)               │         │
│  │                                                │         │
│  │  [Cancel]            [Proceed to Open]         │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│  ──── After Selection ────                                   │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │  🔓 Decrypting Quotations...                   │         │
│  │                                                │         │
│  │  ████████████░░░░░░░░░░░░  60%                │         │
│  │                                                │         │
│  │  Please wait while quotations are being        │         │
│  │  decrypted and verified                        │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│  ──── After Decryption ────                                  │
│                                                              │
│  ✅ Quotations Opened Successfully                           │
│  Opened by: Sarah Tan                                        │
│  Witnessed by: Emily Wong                                    │
│  Date/Time: 11 Feb 2026, 9:00 AM                            │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │  Quotation Summary                             │         │
│  ├────────────────────────────────────────────────┤         │
│  │  Supplier           Submitted      Amount      │         │
│  ├────────────────────────────────────────────────┤         │
│  │  Acme Corporation   05 Feb, 2:30 PM  $235,000 │         │
│  │                                      [View]    │         │
│  ├────────────────────────────────────────────────┤         │
│  │  Best Builders      06 Feb, 10:15 AM $245,000 │         │
│  │                                      [View]    │         │
│  ├────────────────────────────────────────────────┤         │
│  │  Global Services    08 Feb, 4:45 PM  $228,000 │         │
│  │                                      [View]    │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│                       [Proceed to Evaluation →]              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 5.6 Evaluation & Comparison

```
┌──────────────────────────────────────────────────────────────┐
│  Evaluate Quotations - RFQ-2026-001                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [Summary] [Comparison] [Scoring] [Documents] [Award]       │
│                                                              │
│  ──── Comparison View ────                                   │
│                                                              │
│  ┌─────────────┬─────────────┬─────────────┐               │
│  │ Acme Corp   │ Best Build  │ Global Svc  │               │
│  ├─────────────┼─────────────┼─────────────┤               │
│  │ $235,000    │ $245,000    │ $228,000    │               │
│  ├─────────────┼─────────────┼─────────────┤               │
│  │ Line Items                              │               │
│  │ 1. Lift mod │ 1. Lift upg │ 1. Complete │               │
│  │    (4 units)│    (4 units)│    solution │               │
│  │    $220,000 │    $240,000 │    $210,000 │               │
│  │             │             │             │               │
│  │ 2. Testing  │ 2. Maint.   │ 2. Testing  │               │
│  │    $15,000  │    $5,000   │    $18,000  │               │
│  ├─────────────┼─────────────┼─────────────┤               │
│  │ Timeline    │ Timeline    │ Timeline    │               │
│  │ 12 weeks    │ 10 weeks    │ 14 weeks    │               │
│  ├─────────────┼─────────────┼─────────────┤               │
│  │ [View Full] │ [View Full] │ [View Full] │               │
│  └─────────────┴─────────────┴─────────────┘               │
│                                                              │
│  ──── Scoring Matrix ────                                    │
│                                                              │
│  ┌──────────────────────────────────────────────────┐       │
│  │  Criteria      Weight  Acme  Best  Global        │       │
│  ├──────────────────────────────────────────────────┤       │
│  │  Price         40%     38/40 35/40 40/40         │       │
│  │  Technical     35%     ██    ██    ██            │       │
│  │                        32    30    28            │       │
│  │  Delivery      25%     ██    ██    ██            │       │
│  │                        22    25    20            │       │
│  ├──────────────────────────────────────────────────┤       │
│  │  Total Score   100%    92    90    88            │       │
│  │                        🏆                         │       │
│  └──────────────────────────────────────────────────┘       │
│                                                              │
│  Recommendation: Acme Corporation (Highest Score)            │
│                                                              │
│  Remarks                                                     │
│  ┌──────────────────────────────────────────┐               │
│  │ Acme Corp offers best value with         │               │
│  │ competitive pricing and proven track...  │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│              [Export Report]  [Submit for Award Approval]    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 6. COMPONENT LIBRARY

### 6.1 Common Components

```typescript
// Components to build

1. Layout Components
   - AppLayout (with sidebar, header, footer)
   - DashboardLayout
   - AuthLayout

2. Navigation
   - Sidebar
   - TopBar
   - Breadcrumbs
   - Tabs

3. Forms
   - TextInput
   - TextArea (rich text editor)
   - Select/Dropdown
   - DatePicker
   - FileUpload
   - FormStepper

4. Data Display
   - DataTable (sortable, filterable)
   - StatCard (for dashboard metrics)
   - Timeline
   - StatusBadge
   - ProgressBar

5. Feedback
   - Alert/Notification
   - ConfirmDialog
   - LoadingSpinner
   - Toast/Snackbar
   - EmptyState

6. RFQ-Specific
   - RFQCard
   - QuotationCard
   - ComparisonTable
   - ScoringMatrix
   - EncryptionIndicator
   - AuditLogViewer
```

### 6.2 Sample Component: StatusBadge

```typescript
// StatusBadge.tsx
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<
  Status,
  { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; className?: string }
> = {
  draft: {
    label: 'Draft',
    variant: 'outline',
    className: 'bg-gray-100 text-gray-700 border-gray-300'
  },
  published: {
    label: 'Published',
    variant: 'default',
    className: 'bg-blue-500 text-white hover:bg-blue-600'
  },
  closed: {
    label: 'Closed',
    variant: 'secondary',
    className: 'bg-orange-500 text-white hover:bg-orange-600'
  },
  evaluated: {
    label: 'Evaluated',
    variant: 'secondary',
    className: 'bg-indigo-500 text-white hover:bg-indigo-600'
  },
  awarded: {
    label: 'Awarded',
    variant: 'default',
    className: 'bg-green-500 text-white hover:bg-green-600'
  },
  submitted: {
    label: 'Submitted',
    variant: 'default',
    className: 'bg-blue-500 text-white hover:bg-blue-600'
  },
  approved: {
    label: 'Approved',
    variant: 'default',
    className: 'bg-green-500 text-white hover:bg-green-600'
  },
  pending: {
    label: 'Pending',
    variant: 'secondary',
    className: 'bg-yellow-500 text-white hover:bg-yellow-600'
  },
  rejected: {
    label: 'Rejected',
    variant: 'destructive',
    className: 'bg-red-500 text-white hover:bg-red-600'
  }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const config = statusConfig[status];
  return (
    <Badge
      variant={config.variant}
      className={cn(config.className, className)}
    >
      {config.label}
    </Badge>
  );
};
```

### 6.3 Sample Component: EncryptionIndicator

```typescript
// EncryptionIndicator.tsx
import React from 'react';
import { Lock, LockOpen } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface EncryptionIndicatorProps {
  isEncrypted: boolean;
  timestamp?: Date;
  className?: string;
}

export const EncryptionIndicator: React.FC<EncryptionIndicatorProps> = ({
  isEncrypted,
  timestamp,
  className
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn('flex items-center gap-2', className)}>
            {isEncrypted ? (
              <>
                <Lock className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">
                  Encrypted
                </span>
              </>
            ) : (
              <>
                <LockOpen className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-orange-500 font-medium">
                  Decrypted
                </span>
              </>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {isEncrypted
              ? `Encrypted since ${timestamp?.toLocaleString()}`
              : 'Decrypted - viewable'}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
```

### 6.4 Sample Component: RFQCard

```typescript
// RFQCard.tsx
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusBadge } from './StatusBadge';
import { Calendar, DollarSign, FileText } from 'lucide-react';
import { format } from 'date-fns';

interface RFQCardProps {
  rfq: {
    rfqNumber: string;
    title: string;
    status: 'draft' | 'published' | 'closed' | 'evaluated' | 'awarded';
    closeDate: Date;
    budget: number;
    quotationCount?: number;
  };
  onView: () => void;
}

export const RFQCard: React.FC<RFQCardProps> = ({ rfq, onView }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">{rfq.rfqNumber}</p>
            <CardTitle className="text-lg">{rfq.title}</CardTitle>
          </div>
          <StatusBadge status={rfq.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Closes: {format(rfq.closeDate, 'dd MMM yyyy')}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <DollarSign className="h-4 w-4" />
          <span>Budget: ${rfq.budget.toLocaleString()}</span>
        </div>
        {rfq.quotationCount !== undefined && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="h-4 w-4" />
            <span>Quotations: {rfq.quotationCount}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onView} className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
```

### 6.5 Sample Component: DataTable

```typescript
// DataTable.tsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  caption?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  caption
}: DataTableProps<T>) {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={String(column.key)}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length === 0 ? (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center text-muted-foreground">
              No data available
            </TableCell>
          </TableRow>
        ) : (
          data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={String(column.key)}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key])}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
```

---

## 7. VISUAL DESIGN GUIDELINES

### 7.1 Color Palette

```css
/* Primary Colors */
--primary-main: #1976d2;      /* Singapore blue */
--primary-light: #42a5f5;
--primary-dark: #1565c0;

/* Secondary Colors */
--secondary-main: #dc004e;
--secondary-light: #f50057;
--secondary-dark: #9a0036;

/* Status Colors */
--success: #2e7d32;
--warning: #ed6c02;
--error: #d32f2f;
--info: #0288d1;

/* Neutrals */
--grey-50: #fafafa;
--grey-100: #f5f5f5;
--grey-200: #eeeeee;
--grey-300: #e0e0e0;
--grey-500: #9e9e9e;
--grey-700: #616161;
--grey-900: #212121;

/* Background */
--bg-default: #fafafa;
--bg-paper: #ffffff;
```

### 7.2 Typography

```css
/* Font Family */
font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

/* Headings */
h1: 2.5rem / 40px, weight: 300
h2: 2rem / 32px, weight: 400
h3: 1.75rem / 28px, weight: 400
h4: 1.5rem / 24px, weight: 500
h5: 1.25rem / 20px, weight: 500
h6: 1rem / 16px, weight: 500

/* Body */
body1: 1rem / 16px, weight: 400
body2: 0.875rem / 14px, weight: 400

/* Caption */
caption: 0.75rem / 12px, weight: 400
```

### 7.3 Spacing

```css
/* Use 8px grid system */
--spacing-1: 8px;
--spacing-2: 16px;
--spacing-3: 24px;
--spacing-4: 32px;
--spacing-5: 40px;
```

### 7.4 Elevation (Shadows)

```css
/* Card shadows */
--elevation-1: 0 2px 4px rgba(0,0,0,0.1);
--elevation-2: 0 4px 8px rgba(0,0,0,0.12);
--elevation-3: 0 8px 16px rgba(0,0,0,0.14);
```

---

## 8. ANIMATIONS & INTERACTIONS

### 8.1 Encryption Animation

```typescript
// EncryptionAnimation.tsx
import React, { useEffect, useState } from 'react';
import { Lock, Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export const EncryptionAnimation: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {/* Animated lock icon */}
      <div className="relative">
        <div
          className={cn(
            'rounded-full p-6 transition-all duration-300',
            progress < 100
              ? 'bg-blue-100 animate-pulse'
              : 'bg-green-100'
          )}
        >
          {progress < 100 ? (
            <Lock className="h-12 w-12 text-blue-600 animate-bounce" />
          ) : (
            <Check className="h-12 w-12 text-green-600" />
          )}
        </div>

        {/* Circular progress ring */}
        <svg
          className="absolute top-0 left-0 -rotate-90 w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={progress < 100 ? '#3b82f6' : '#22c55e'}
            strokeWidth="4"
            strokeDasharray={`${progress * 2.827} 282.7`}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
      </div>

      {/* Status text */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold">
          {progress < 100 ? 'Encrypting quotation...' : 'Encryption complete!'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {progress}%
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-center text-muted-foreground">
          {progress < 100
            ? 'Securing your quotation data...'
            : 'Your quotation is now encrypted and secure'}
        </p>
      </div>
    </div>
  );
};
```

### 8.2 Decryption Animation

```typescript
// DecryptionAnimation.tsx
import React, { useEffect, useState } from 'react';
import { LockOpen, ShieldCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export const DecryptionAnimation: React.FC<{ onComplete?: () => void }> = ({
  onComplete
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete?.();
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="relative">
        <div
          className={cn(
            'rounded-full p-6 transition-all duration-300',
            progress < 100
              ? 'bg-orange-100 animate-pulse'
              : 'bg-green-100'
          )}
        >
          {progress < 100 ? (
            <LockOpen className="h-12 w-12 text-orange-600 animate-bounce" />
          ) : (
            <ShieldCheck className="h-12 w-12 text-green-600" />
          )}
        </div>

        <svg
          className="absolute top-0 left-0 -rotate-90 w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={progress < 100 ? '#f97316' : '#22c55e'}
            strokeWidth="4"
            strokeDasharray={`${progress * 2.827} 282.7`}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold">
          {progress < 100 ? 'Decrypting quotations...' : 'Decryption complete!'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {progress}%
        </p>
      </div>

      <div className="w-full max-w-xs space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-center text-muted-foreground">
          {progress < 100
            ? 'Verifying and decrypting submissions...'
            : 'All quotations are now accessible'}
        </p>
      </div>
    </div>
  );
};
```

### 8.3 Page Transitions

```typescript
// Use Framer Motion for smooth transitions
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

// Wrap page components
<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

---

## 9. RESPONSIVE DESIGN

### 9.1 Breakpoints

```typescript
const breakpoints = {
  xs: 0,      // Mobile
  sm: 600,    // Tablet
  md: 960,    // Small desktop
  lg: 1280,   // Desktop
  xl: 1920    // Large desktop
};
```

### 9.2 Mobile Considerations

- Collapsible sidebar → hamburger menu
- Stack comparison tables vertically
- Touch-friendly buttons (min 44px height)
- Simplified data tables (hide non-essential columns)
- Bottom navigation for key actions

---

## 10. DEMO DATA GENERATOR

### 10.1 Generate Random RFQs

```typescript
// mockDataGenerator.ts
import { faker } from '@faker-js/faker';
import { RFQ, Quotation } from './db';

export function generateMockRFQs(count: number): RFQ[] {
  const categories = [
    'Construction & Renovation',
    'Cleaning Services',
    'Security Services',
    'Landscaping',
    'Maintenance',
    'IT Services'
  ];

  const rfqs: RFQ[] = [];

  for (let i = 1; i <= count; i++) {
    const publishDate = faker.date.recent({ days: 30 });
    const closeDate = faker.date.soon({ days: 30, refDate: publishDate });

    rfqs.push({
      id: i,
      rfqNumber: `RFQ-2026-${String(i).padStart(3, '0')}`,
      title: faker.commerce.productName(),
      description: faker.lorem.paragraphs(2),
      category: faker.helpers.arrayElement(categories),
      budget: faker.number.int({ min: 10000, max: 500000 }),
      createdBy: 2, // Sarah Tan
      createdAt: faker.date.recent({ days: 45 }),
      publishDate,
      closeDate,
      status: faker.helpers.arrayElement(['published', 'closed', 'evaluated']),
      approvalStatus: 'approved',
      approvedBy: 3
    });
  }

  return rfqs;
}

export function generateMockQuotations(rfqId: number, count: number): Quotation[] {
  const quotations: Quotation[] = [];

  for (let i = 1; i <= count; i++) {
    const supplierId = 4 + i; // Supplier IDs start from 5

    quotations.push({
      id: (rfqId - 1) * 10 + i,
      rfqId,
      supplierId,
      quotationNumber: `QTN-2026-${String(rfqId).padStart(3, '0')}-${String(i).padStart(3, '0')}`,
      submittedAt: faker.date.recent({ days: 10 }),
      status: 'submitted',
      totalAmount: faker.number.int({ min: 5000, max: 300000 }),
      isAlternative: faker.datatype.boolean({ probability: 0.2 }),
      lineItems: [
        {
          itemNo: 1,
          description: faker.commerce.productDescription(),
          quantity: faker.number.int({ min: 1, max: 10 }),
          unitPrice: faker.number.int({ min: 1000, max: 50000 }),
          totalPrice: 0 // Calculate in code
        }
      ]
    });

    // Calculate total
    quotations[quotations.length - 1].lineItems.forEach(item => {
      item.totalPrice = item.quantity * item.unitPrice;
    });
  }

  return quotations;
}
```

---

## 11. PROJECT STRUCTURE

```
e-procurement-mockup/
├── public/
│   ├── avatars/
│   │   ├── admin.jpg
│   │   ├── sarah.jpg
│   │   ├── david.jpg
│   │   └── ...
│   └── logos/
│       └── town-council-logo.svg
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── AppLayout.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── DataTable.tsx
│   │   │   └── ...
│   │   ├── rfq/
│   │   │   ├── RFQCard.tsx
│   │   │   ├── RFQForm.tsx
│   │   │   ├── RFQStepper.tsx
│   │   │   └── ...
│   │   ├── quotation/
│   │   │   ├── QuotationForm.tsx
│   │   │   ├── QuotationCard.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   └── ...
│   │   └── animations/
│   │       ├── EncryptionAnimation.tsx
│   │       └── DecryptionAnimation.tsx
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   └── ForgotPassword.tsx
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── StaffDashboard.tsx
│   │   │   └── SupplierDashboard.tsx
│   │   ├── rfq/
│   │   │   ├── RFQList.tsx
│   │   │   ├── RFQDetail.tsx
│   │   │   ├── CreateRFQ.tsx
│   │   │   ├── OpenQuotations.tsx
│   │   │   └── EvaluateQuotations.tsx
│   │   ├── supplier/
│   │   │   ├── SupplierList.tsx
│   │   │   ├── SupplierRegistration.tsx
│   │   │   └── SupplierProfile.tsx
│   │   └── audit/
│   │       └── AuditLogs.tsx
│   │
│   ├── store/
│   │   ├── authStore.ts
│   │   ├── rfqStore.ts
│   │   └── quotationStore.ts
│   │
│   ├── db/
│   │   ├── db.ts (Dexie schema)
│   │   ├── seedData.ts
│   │   └── mockDataGenerator.ts
│   │
│   ├── utils/
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── helpers.ts
│   │
│   ├── types/
│   │   ├── user.types.ts
│   │   ├── rfq.types.ts
│   │   └── quotation.types.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useRFQ.ts
│   │   └── useQuotation.ts
│   │
│   ├── theme/
│   │   └── theme.ts (MUI theme configuration)
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── routes.tsx
│
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 12. DEVELOPMENT TIMELINE

### Week 1: Setup & Foundation
**Days 1-2**: Project Setup
- Initialize Vite + React + TypeScript
- Install dependencies (MUI, Dexie, React Router, etc.)
- Setup project structure
- Configure theme and styling

**Days 3-5**: Data Layer & Components
- Setup Dexie database schema
- Create seed data generator
- Build common component library (StatusBadge, DataTable, etc.)
- Create layout components (AppLayout, Sidebar, TopBar)

### Week 2: Core Pages
**Days 1-2**: Authentication & Dashboard
- Login page with demo user selector
- Staff dashboard with metrics
- Supplier dashboard
- Basic navigation

**Days 3-5**: RFQ Management
- RFQ list view
- RFQ detail view
- Create RFQ flow (multi-step form)
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

## 13. QUICK START GUIDE

### 13.1 Installation

**⚠️ IMPORTANT: Before starting, visit https://tailwindcss.com/docs to check the latest Tailwind CSS v4 installation instructions.**

```bash
# Step 1: Create Vite project with React + TypeScript
npm create vite@latest e-procurement-mockup -- --template react-ts

# Step 2: Navigate to project
cd e-procurement-mockup

# Step 3: Install core dependencies
npm install react-router-dom dexie
npm install react-hook-form zod @hookform/resolvers
npm install date-fns
npm install lucide-react
npm install class-variance-authority clsx tailwind-merge

# Step 4: Install Tailwind CSS v4 (check docs for latest version)
# For v4 beta:
npm install tailwindcss@next autoprefixer postcss -D

# For v4 stable (when available):
# npm install tailwindcss@latest autoprefixer postcss -D

# Install Tailwind plugins
npm install @tailwindcss/typography @tailwindcss/forms -D

# Step 5: Install dev dependencies
npm install @faker-js/faker -D

# Step 6: Initialize shadcn/ui
npx shadcn@latest init

# Follow the prompts:
# ✔ TypeScript: yes
# ✔ Style: Default
# ✔ Base color: Slate
# ✔ CSS file: src/index.css
# ✔ CSS variables: yes
# ✔ Tailwind config: tailwind.config.ts
# ✔ Import alias (components): @/components
# ✔ Import alias (utils): @/lib/utils
# ✔ React Server Components: no

# Step 7: Add shadcn/ui components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add alert
npx shadcn@latest add toast
npx shadcn@latest add tabs
npx shadcn@latest add select
npx shadcn@latest add calendar
npx shadcn@latest add form
npx shadcn@latest add progress
npx shadcn@latest add separator
npx shadcn@latest add avatar
npx shadcn@latest add skeleton
npx shadcn@latest add tooltip
npx shadcn@latest add checkbox
npx shadcn@latest add label
npx shadcn@latest add textarea

# OR add all components at once:
# npx shadcn@latest add --all

# Step 8: Update src/index.css with Tailwind v4 syntax
# See Section 2.3 for the complete CSS configuration

# Step 9: Start development server
npm run dev
```

**Verify Installation:**
```bash
# Check that these files exist:
# ✓ components.json
# ✓ src/lib/utils.ts
# ✓ src/components/ui/button.tsx (and other components)
# ✓ tailwind.config.ts (if using traditional config)
# ✓ postcss.config.js

# Verify Tailwind is working:
# Open http://localhost:5173 and check that styles are applied
```

### 13.2 Initialize Database

```typescript
// In App.tsx or main.tsx
import { useEffect } from 'react';
import { db } from './db/db';
import { seedDatabase } from './db/seedData';

function App() {
  useEffect(() => {
    // Seed database on first load
    const initDB = async () => {
      const userCount = await db.users.count();
      if (userCount === 0) {
        await seedDatabase();
        console.log('✅ Database initialized with demo data');
      }
    };

    initDB();
  }, []);

  return <YourApp />;
}
```

### 13.3 Run Mockup

```bash
npm run dev
```

Navigate to `http://localhost:5173`

**Demo Login Credentials**:
- Procurement Officer: `procurement1` / `password123`
- Approving Authority: `approver1` / `password123`
- Supplier: `supplier1` / `password123`

---

## 14. DEMO SCRIPT

### 14.1 Demo Flow (15 minutes)

**Introduction (2 min)**
- Show login page with demo user selector
- Brief overview of user roles

**Journey 1: Create RFQ (3 min)**
- Login as Procurement Officer
- Navigate to dashboard (show metrics)
- Click "Create New RFQ"
- Walk through multi-step form
- Submit for approval
- Show notification

**Journey 2: Approve RFQ (2 min)**
- Switch to Approving Authority
- Show approval notification
- Review RFQ details
- Approve
- Show auto-publish

**Journey 3: Submit Quotation (3 min)**
- Switch to Supplier view
- Show available RFQs
- Open RFQ details
- Fill quotation form with line items
- Show encryption animation
- Submit and get receipt

**Journey 4: Open & Evaluate (4 min)**
- Switch back to Procurement Officer
- Show closed RFQ
- Open quotations (assign witness)
- Show decryption animation
- View comparison table
- Enter scores
- Award quotation

**Conclusion (1 min)**
- Show audit log
- Show notifications sent
- Q&A

---

## 15. DELIVERABLES

### 15.1 Software Deliverables
- [ ] Working frontend mockup (deployed)
- [ ] Source code repository
- [ ] README with setup instructions
- [ ] Demo script document

### 15.2 Documentation
- [x] Frontend mockup specification (this document)
- [ ] Component documentation
- [ ] Demo user guide
- [ ] Video walkthrough (optional)

### 15.3 Design Assets
- [ ] UI wireframes/mockups (Figma/Sketch)
- [ ] Color palette guide
- [ ] Icon set
- [ ] Logo assets

---

## 16. BROWSER COMPATIBILITY

**Supported Browsers**:
- Chrome 90+
- Edge 90+
- Firefox 88+
- Safari 14+

**Not Supported**:
- Internet Explorer (all versions)

---

## 17. PERFORMANCE TARGETS

- **Initial Load**: < 2 seconds
- **Page Transitions**: < 500ms
- **Form Submission**: < 1 second (with animation)
- **Data Table Rendering**: < 500ms for 100 rows

---

## 18. ACCESSIBILITY

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus indicators
- Sufficient color contrast (WCAG AA)
- Screen reader friendly

---

## 19. FUTURE ENHANCEMENTS (Post-Mockup)

- Backend API integration
- Real authentication system
- Email notifications
- PDF generation
- Advanced reporting
- Mobile app
- Multi-language support
- Dark mode

---

## 20. SUPPORT & CONTACT

**Development Team**:
- Frontend Lead: [Name]
- UI/UX Designer: [Name]
- Project Manager: [Name]

**Questions?**
- Email: dev-team@example.com
- Slack: #e-procurement-mockup

---

## APPENDIX A: Color Reference

```javascript
export const colors = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff'
  },
  secondary: {
    main: '#dc004e',
    light: '#f50057',
    dark: '#9a0036',
    contrastText: '#fff'
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20'
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100'
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828'
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b'
  }
};
```

---

## APPENDIX B: Sample Routes

```typescript
// routes.tsx
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'rfqs',
        children: [
          { index: true, element: <RFQList /> },
          { path: 'create', element: <CreateRFQ /> },
          { path: ':id', element: <RFQDetail /> },
          { path: ':id/open', element: <OpenQuotations /> },
          { path: ':id/evaluate', element: <EvaluateQuotations /> }
        ]
      },
      {
        path: 'quotations',
        children: [
          { path: ':rfqId/submit', element: <SubmitQuotation /> }
        ]
      },
      {
        path: 'suppliers',
        children: [
          { index: true, element: <SupplierList /> },
          { path: 'register', element: <SupplierRegistration /> }
        ]
      },
      {
        path: 'audit-logs',
        element: <AuditLogs />
      }
    ]
  }
]);
```

---

**Document Version**: 1.0
**Last Updated**: 2026-01-30

**END OF SPECIFICATION**
