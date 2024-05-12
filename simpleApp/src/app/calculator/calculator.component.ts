import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  public first: number = 1;
  public second: number = 1;  

  public operation: string = "+";
  public operations: string[] = ["+", "-", "/", "*"];

  public result?: number = undefined;

  public calc() {
    switch(this.operation) {
      case '+':
        this.result = this.first + this.second;
        break;
        case '-':
        this.result = this.first - this.second;
        break;
        case '*':
        this.result = this.first * this.second;
        break;
        case '/':
        this.result = this.first / this.second;
        break;
    }
  }
}
