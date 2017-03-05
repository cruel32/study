import { Component, ContentChild, Directive, Input  } from '@angular/core';

@Directive({selector:"GroupTitle"})
export class GroupTitle {
  @Input() value:string;
}

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./contentchild.component.css']
})
export class childButtonCmp {
  @Input() value:string;
  get buttonValue():string{
    return this.value
  }
  hello(){
    alert("hello");
  }
}

@Component({
  selector : "button-group",
  templateUrl: './button-group.component.html'
})
export class ButtonGroup {
  @ContentChild(GroupTitle) groupTitle:GroupTitle;
  get getTitle():string {
    return this.groupTitle.value
  }
}

@Component({
  selector : "app-contentchild",
  templateUrl: './app-contentchild.component.html'
})
export class ContentChildComp {}
