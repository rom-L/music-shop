import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicShopAboutComponent } from './music-shop-about/music-shop-about.component';
import { MusicShopInstrumentsComponent } from './music-shop-instruments/music-shop-instruments.component';

const routes: Routes = [
  {
    //si el path es vacio se redirecciona
    path: '',
    redirectTo: 'instruments',
    pathMatch: 'full',
  },
  {
    path: 'instruments',
    component: MusicShopInstrumentsComponent,
  },
  {
    path: 'about',
    component: MusicShopAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
