import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CalculatorComponent]
})
export class AppComponent {
  public title = 'ya kaka';
  public string = '';

  public showMessage() {
    alert("jopa");
  }
}
