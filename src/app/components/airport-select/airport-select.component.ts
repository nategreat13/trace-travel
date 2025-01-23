import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { Airports } from '../../constants/airports.constants';
import { CoreDataService } from '../../services/user/coreData.service';
import { SelectInputComponent } from '../select-input/select-input.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-airport-select',
  imports: [SelectInputComponent],
  templateUrl: './airport-select.component.html',
  styleUrl: './airport-select.component.css',
})
export class AirportSelectComponent implements OnChanges {
  @Input() selectedAirport: string = '';
  selectedValue = signal<string>('');

  @Output() onAirportSelected = new EventEmitter<string>();

  options = signal(
    Airports.map((airport) => {
      return {
        label: `${airport.city} (${airport.code})`,
        value: airport.code,
      };
    })
  );

  coreDataService = inject(CoreDataService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedAirport'] && changes['selectedAirport'].currentValue) {
      this.selectedValue.set(changes['selectedAirport'].currentValue);
    }
  }

  onSelect(newVal: string) {
    this.onAirportSelected.emit(newVal);
  }
}
