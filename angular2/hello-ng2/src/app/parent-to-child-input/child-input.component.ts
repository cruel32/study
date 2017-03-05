import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-input',
  templateUrl: "child-input.component.html",
  styles: [`div {border:2px solid #ccc; padding:10px; }`],
  inputs : ["name1","name2","name3","name4","name5","name6"]
})
export class ChildInputComponent {
  name1:string;
  name2:string;
  name3:string[];
  name4:string;
  name5:string;
  name6:string;
}
