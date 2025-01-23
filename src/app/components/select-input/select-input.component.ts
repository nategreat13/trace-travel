import {
  Component,
  EventEmitter,
  Input,
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
  selectedValue = input.required<string>();
  placeholder = input('Select an option...');
  options = input.required<{ value: string; label: string }[]>();

  constructor() {
    console.log(this.selectedValue(), '4tKqlpFUcq');
  }

  @Output('alert') alert = new EventEmitter<string>();
  onSelect(event: Event) {
    const newVal = (event.target as HTMLSelectElement).value;
    this.alert.emit(newVal);
  }
}
