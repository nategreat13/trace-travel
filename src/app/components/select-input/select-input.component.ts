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
  @Input() selectedValue: string = ''; // Input from parent
  @Input() placeholder: string = 'Select an option...';
  @Input() options: { value: string; label: string }[] = [];

  @Output() alert = new EventEmitter<string>();

  onSelect(event: Event) {
    const newVal = (event.target as HTMLSelectElement).value;
    this.selectedValue = newVal;
    this.alert.emit(newVal);
  }
}
