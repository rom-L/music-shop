import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicShopInstrumentsComponent } from './music-shop-instruments.component';

describe('MusicShopInstrumentsComponent', () => {
  let component: MusicShopInstrumentsComponent;
  let fixture: ComponentFixture<MusicShopInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicShopInstrumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicShopInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
