import { Routes } from '@angular/router';
import { CalculatorModule } from './calculator/calculator.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/components/calculator.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    {
        title: "calculator",
        path: "calculator",
        component: CalculatorComponent
    },
    {
        title: "dom",
        path: "",
        component: AppComponent
    },
    {
        title: "dom",
        path: "**",
        component: ErrorPageComponent
    }
];
