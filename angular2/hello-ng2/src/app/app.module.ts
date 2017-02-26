import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './helloComponent/hello.component';
import { NestedParentComponent } from './nested-component/parent.component';
import { NestedChildComponent } from './nested-component/child.component';
import { NestedGrandsonComponent } from './nested-component/grandson.component';
import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input.component';
import { ChildInputComponent } from './parent-to-child-input/child-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NestedParentComponent,
    NestedChildComponent,
    NestedGrandsonComponent,
    ParentToChildInputComponent,
    ChildInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,HelloComponent,NestedParentComponent,ParentToChildInputComponent]
})
export class AppModule { }
