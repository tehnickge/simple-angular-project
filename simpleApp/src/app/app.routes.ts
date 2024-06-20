import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/components/calculator.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
  {
    title: 'calculator',
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('./object-list/object-list.module').then(
        (m) => m.ObjectListModule
      ),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./directives/directives.module').then((m) => m.DirectivesModule),
  },
  {
    path: 'life-cycle',
    loadChildren: () =>
      import('./lifecycle/life-cycle.module').then((m) => m.LifeCycleModule),
  },
  {
    title: '402',
    path: '**',
    component: ErrorPageComponent,
  },
];
