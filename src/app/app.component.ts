import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VpFaInputComponent } from './libs/vp-fa-input/vp-fa-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, VpFaInputComponent],
})
export class AppComponent {
  title = 'vp-ng-libraries';
}
