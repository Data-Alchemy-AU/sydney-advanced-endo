import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLogoStvinniesComponent } from './banner-logo-stvinnies.component';

describe('BannerLogoStvinniesComponent', () => {
  let component: BannerLogoStvinniesComponent;
  let fixture: ComponentFixture<BannerLogoStvinniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerLogoStvinniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerLogoStvinniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
