import { Component } from '@angular/core';
import { ParentService } from './Parent.service';
import { Child, FirstChild, SecondChild } from '../import-service/child.service'
@Component({
  selector : 'oop-cmp',
  template : `
    <b>생성자 주입방식</b>
    {{firstChildData | json}}<br/><br/>
    <b>상속방식</b><br/>
    {{secondChildData |json}}
  `,
  providers : [ParentService, FirstChild, SecondChild]
})

export class OopComponent {
  firstChildData;
  secondChildData;
  constructor(firstChild:FirstChild,secondChild:SecondChild){
    this.firstChildData = firstChild.getData();
    this.secondChildData = secondChild.getData();
  }
}
