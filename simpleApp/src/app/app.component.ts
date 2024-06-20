import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalculatorModule } from './calculator/calculator.module';
import { Navigation } from './components/navigation/navigation.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormsModule, CalculatorModule, Navigation, ErrorPageComponent, ]
})
export class AppComponent {
  public title = 'hello';
  public string = '';

  public showMessage() {
    alert("text");
  }
}
