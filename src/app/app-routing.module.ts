import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedirectComponent } from './redirect/redirect.component'; 
const routes: Routes = [
  { path: 'redirect/github', component: RedirectComponent, data: { url: 'https://github.com/blakelinkd' }},
  { path: 'redirect/linkedin', component: RedirectComponent, data: { url: 'https://linkedin.com/in/blakelinkd' }},
  { path: '**', redirectTo: '', pathMatch: 'full' }
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
