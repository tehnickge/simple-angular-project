import { NgModule } from '@angular/core';
import { CalculatorComponent } from './components/calculator.component';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

@NgModule({
    imports: [FormsModule, KeyValuePipe],
    exports: [CalculatorComponent],
    declarations: [CalculatorComponent],
    providers: [],
})
export class CalculatorModule { }
