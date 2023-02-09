
import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'Add';
  @Input() color: string = 'Green';
  @Output() btnClick = new EventEmitter()

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
