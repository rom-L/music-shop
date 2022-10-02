import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MusicShopAboutComponent } from './music-shop-about/music-shop-about.component';
import { MusicShopInstrumentsComponent } from './music-shop-instruments/music-shop-instruments.component';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponent,
    CartComponent,
    MusicShopAboutComponent,
    MusicShopInstrumentsComponent,
    InputQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
