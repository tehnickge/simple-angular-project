import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    standalone: true,
    styleUrls: ['./navigation.component.scss'],
    imports: [RouterLink]
})

export class Navigation {
}