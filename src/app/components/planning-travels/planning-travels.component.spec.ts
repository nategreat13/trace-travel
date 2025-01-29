import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningTravelsComponent } from './planning-travels.component';

describe('PlanningTravelsComponent', () => {
  let component: PlanningTravelsComponent;
  let fixture: ComponentFixture<PlanningTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningTravelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
