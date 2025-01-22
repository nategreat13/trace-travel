import {
  Component,
  EventEmitter,
  Output,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-select-input',
  imports: [],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.css',
})
export class SelectInputComponent {
  selectedValue = signal('');
  placeholder = input('Select an option...');
  options = input.required<{ value: string; label: string }[]>();
  @Output('alert') alert = new EventEmitter<string>();
  onSelect(event: Event) {
    const newVal = (event.target as HTMLSelectElement).value;
    this.selectedValue.set(newVal);

    this.alert.emit(newVal);
  }
}
