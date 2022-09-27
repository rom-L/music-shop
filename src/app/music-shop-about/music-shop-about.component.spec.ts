import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicShopAboutComponent } from './music-shop-about.component';

describe('MusicShopAboutComponent', () => {
  let component: MusicShopAboutComponent;
  let fixture: ComponentFixture<MusicShopAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicShopAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicShopAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
