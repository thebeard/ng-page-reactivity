import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'rationale',
    loadComponent: () => import('./routes/rationale/rationale.route.component'),
  },
  {
    path: 'signals',
    loadComponent: () => import('./routes/signals/signals.route.component'),
  },
  {
    path: 'http-resource',
    loadComponent: () => import('./routes/http-resource/http-resource.route.component'),
  },
  {
    path: 'references',
    loadComponent: () => import('./routes/references/references.route.component'),
  },
  {
    path: '**',
    redirectTo: 'rationale',
  },
];
