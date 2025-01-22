import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedBlueButtonComponent } from './get-started-blue-button.component';

describe('GetStartedBlueButtonComponent', () => {
  let component: GetStartedBlueButtonComponent;
  let fixture: ComponentFixture<GetStartedBlueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStartedBlueButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStartedBlueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
