import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeIconWithOrangeBackgroundComponent } from './orange-icon-with-orange-background.component';

describe('OrangeIconWithOrangeBackgroundComponent', () => {
  let component: OrangeIconWithOrangeBackgroundComponent;
  let fixture: ComponentFixture<OrangeIconWithOrangeBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrangeIconWithOrangeBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrangeIconWithOrangeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
