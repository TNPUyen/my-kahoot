import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'create', loadChildren: () => import('./pages/create/create.module').then(m => m.CreateModule) }, 
  { path: 'play', loadChildren: () => import('./pages/play/play.module').then(m => m.PlayModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
