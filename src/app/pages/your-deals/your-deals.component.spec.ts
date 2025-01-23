import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDealsComponent } from './your-deals.component';

describe('YourDealsComponent', () => {
  let component: YourDealsComponent;
  let fixture: ComponentFixture<YourDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourDealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
