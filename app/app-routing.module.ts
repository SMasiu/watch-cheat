import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { WearFaceComponent } from './wear-face/wear-face.component';
import { CheatPageComponent } from './cheat-page/cheat-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/clock', pathMatch: 'full' },
  { path: 'clock', component: WearFaceComponent },
  { path: 'cheat', component: CheatPageComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
