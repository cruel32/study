import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloCompnentComponent } from './hello-compnent/hello-compnent.component';
import { HelloPipePipe } from './hello-pipe.pipe';
import { HelloDirectiveDirective } from './hello-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloCompnentComponent,
    HelloPipePipe,
    HelloDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
