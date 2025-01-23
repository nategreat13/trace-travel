import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportSelectComponent } from './airport-select.component';

describe('AirportSelectComponent', () => {
  let component: AirportSelectComponent;
  let fixture: ComponentFixture<AirportSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
