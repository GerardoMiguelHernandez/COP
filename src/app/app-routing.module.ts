import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'fre-time',
    loadChildren: () => import('./pages/fre-time/fre-time.module').then( m => m.FreTimePageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./pages/hotel/hotel.module').then( m => m.HotelPageModule)
  },
  {
    path: 'hotel1',
    loadChildren: () => import('./pages/hotel1/hotel1.module').then( m => m.Hotel1PageModule)
  },
  {
    path: 'hotel2',
    loadChildren: () => import('./pages/hotel2/hotel2.module').then( m => m.Hotel2PageModule)
  },
  {
    path: 'hotel3',
    loadChildren: () => import('./pages/hotel3/hotel3.module').then( m => m.Hotel3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
