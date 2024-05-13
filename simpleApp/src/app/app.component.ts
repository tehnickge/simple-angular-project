import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CalculatorComponent,FormsModule]
})
export class AppComponent {
  public title = 'hello';
  public string = '';

  public showMessage() {
    alert("text");
  }
}
