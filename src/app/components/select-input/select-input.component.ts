import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SelectInputComponent {
  @Input() selectedValue: string = '';
  @Input() placeholder: string = 'Select an option...';
  @Input() options: { value: string; label: string }[] = [];

  @Output() onValueSelected = new EventEmitter<string>();

  onSelect(event: Event) {
    const newVal = (event.target as HTMLSelectElement).value;
    this.onValueSelected.emit(newVal);
  }
}
