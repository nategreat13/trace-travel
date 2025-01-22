import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealGridComponent } from './deal-grid.component';

describe('DealGridComponent', () => {
  let component: DealGridComponent;
  let fixture: ComponentFixture<DealGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
