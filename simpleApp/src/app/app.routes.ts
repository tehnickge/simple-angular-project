import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/components/calculator.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    {
        title: "calculator",
        path: "calculator",
        component: CalculatorComponent
    },
    {
        path: "", redirectTo: "calculator", pathMatch:'full'
    },
    {
        path: 'object-list',
        loadChildren: () => import('./object-list/object-list.module').then((m) => m.ObjectListModule)
    },
    {
        title: "404",
        path: "**",
        component: ErrorPageComponent
    }
];
