import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';

import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MusicShopAboutComponent } from './music-shop-about/music-shop-about.component';
import { MusicShopInstrumentsComponent } from './music-shop-instruments/music-shop-instruments.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    CartComponent,
    MusicShopAboutComponent,
    MusicShopInstrumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
