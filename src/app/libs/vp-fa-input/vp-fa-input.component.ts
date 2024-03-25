import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vp-fa-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vp-fa-input.component.html',
  styleUrl: './vp-fa-input.component.scss',
})
export class VpFaInputComponent {
  @Input()
  icon: string = '';
  @Input()
  inputType: string = '';
  @Input()
  placeHolder: string = '';

  get classes() {
    const cssClassess: { [key: string]: boolean } = {};
    if (this.icon) {
      cssClassess['fa-' + this.icon] = true;
    }
    return cssClassess;
  }

  ngOnInit() {}
}
