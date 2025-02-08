import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, RouterLink, RouterLinkActive} from '@angular/router';
import { IBreadCrumb } from './breadcrumb.interface';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd), // ✅ Type-safe event filter
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    //If no routeConfig is avalailable we are on the root path
    const data = route.routeConfig?.data as any; // ✅ Safe access
    let label = data?.['breadcrumb'] || ''; // ✅ Use bracket notation
    let isClickable = data?.['isClickable'] || false;
    let path = route.routeConfig?.path || ''; // ✅ Prevent undefined path

    // Handle dynamic routes like ":id"
    const lastRoutePart = path?.split('/').pop() || '';
    const isDynamicRoute = lastRoutePart.startsWith(':');

    if (isDynamicRoute && route.snapshot) {
      const paramName = lastRoutePart.replace(':', '');
      path = path.replace(lastRoutePart, route.snapshot.params[paramName] || '');
      label = route.snapshot.params[paramName] || label;
    }

    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: IBreadCrumb = { label, url: nextUrl };

    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];

    return route.firstChild ? this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs) : newBreadcrumbs;
  }
}
