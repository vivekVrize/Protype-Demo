import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent),
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'rfqs',
        loadComponent: () =>
          import('./features/rfq/pages/rfq-list/rfq-list.component')
            .then(m => m.RfqListComponent),
        data: { breadcrumb: 'RFQs' }
      },
      {
        path: 'quotations',
        loadComponent: () =>
          import('./features/quotation/pages/quotation-list/quotation-list.component')
            .then(m => m.QuotationListComponent),
        data: { breadcrumb: 'Quotations' }
      },
      {
        path: 'approvals',
        loadComponent: () =>
          import('./features/rfq/pages/approvals/approvals.component')
            .then(m => m.ApprovalsComponent),
        data: { breadcrumb: 'Approvals' }
      },
      {
        path: 'audit',
        loadComponent: () =>
          import('./features/audit/pages/audit-list/audit-list.component')
            .then(m => m.AuditListComponent),
        data: { breadcrumb: 'Audit Trail' }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
