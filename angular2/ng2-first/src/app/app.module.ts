import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { IntroComponent } from './intro.component';
import { HelloComponent } from './hello/hello.component';
import { CoreTestComponent } from './core-test/core-test.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HelloComponent,
    CoreTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule.forRoot({nickName:'Happy'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
