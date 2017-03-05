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
import { ItemComponent, Item, ViewChildComponent } from './viewchild/viewchild.component';
import { ViewchildrenComponent, ChildCmp } from './viewchildren/viewchildren.component';
import { ContentChildComp, ButtonGroup, GroupTitle, childButtonCmp} from './contentchild/contentchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NestedParentComponent,
    NestedChildComponent,
    NestedGrandsonComponent,
    ParentToChildInputComponent,
    ChildInputComponent,
    ViewChildComponent, Item, ItemComponent,
    ViewchildrenComponent, ChildCmp,
    ContentChildComp, GroupTitle, childButtonCmp, ButtonGroup
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
