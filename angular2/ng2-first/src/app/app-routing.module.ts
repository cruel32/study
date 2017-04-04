import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro.component';
import { HelloComponent } from './hello/hello.component';
import { CoreTestComponent } from './core-test/core-test.component';

const appRoutes:Routes=[
  {path:'', component:IntroComponent},
  {path:'hello', component:HelloComponent},
  {path:'core-test', component:CoreTestComponent},
  {path:'lazy', loadChildren:'app/player/player.module#PlayerModule'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
