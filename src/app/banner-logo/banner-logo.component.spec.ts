import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLogoComponent } from './banner-logo.component';

describe('BannerLogoComponent', () => {
  let component: BannerLogoComponent;
  let fixture: ComponentFixture<BannerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
