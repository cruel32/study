import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-input',
  template: `
    <div>
      자식<br/>
      name1:{{name1}}<br/>
      name2:{{name2}}<br/>
      name3:<span *ngFor="let i of name3">{{i}}</span><br/>
      name4:{{name4}}<br/>
      name5:{{name5}}<br/>
      name6:{{name6}}<br/>
    </div>
  `,
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
