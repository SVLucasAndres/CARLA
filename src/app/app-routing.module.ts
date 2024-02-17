import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inses',
    loadChildren: () => import('./inses/inses.module').then( m => m.InsesPageModule)
  },
  {
    path: 're',
    loadChildren: () => import('./re/re.module').then( m => m.RePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'intro2',
    loadChildren: () => import('./intro2/intro2.module').then( m => m.Intro2PageModule)
  },
  {
    path: 'intro3',
    loadChildren: () => import('./intro3/intro3.module').then( m => m.Intro3PageModule)
  },
  {
    path: 'intro4',
    loadChildren: () => import('./intro4/intro4.module').then( m => m.Intro4PageModule)
  },
  {
    path: 'intro5',
    loadChildren: () => import('./intro5/intro5.module').then( m => m.Intro5PageModule)
  },

 
  {
    path: 'agendar',
    loadChildren: () => import('./agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'agendar2',
    loadChildren: () => import('./agendar2/agendar2.module').then( m => m.Agendar2PageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'prin',
    loadChildren: () => import('./prin/prin.module').then( m => m.PrinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
