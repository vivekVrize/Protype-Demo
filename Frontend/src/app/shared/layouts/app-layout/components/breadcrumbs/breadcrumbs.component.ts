import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Crumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  crumbs: Crumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.crumbs = this.buildCrumbs(this.route.root);
    });
  }

  private buildCrumbs(route: ActivatedRoute, url: string = '', crumbs: Crumb[] = []): Crumb[] {
    const children = route.children;

    if (children.length === 0) {
      return crumbs;
    }

    for (const child of children) {
      const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'] || child.snapshot.routeConfig?.path;
      if (label) {
        crumbs.push({ label, url });
      }

      return this.buildCrumbs(child, url, crumbs);
    }

    return crumbs;
  }
}
