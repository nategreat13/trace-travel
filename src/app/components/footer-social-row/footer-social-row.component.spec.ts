import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialRowComponent } from './footer-social-row.component';

describe('FooterSocialRowComponent', () => {
  let component: FooterSocialRowComponent;
  let fixture: ComponentFixture<FooterSocialRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSocialRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSocialRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
