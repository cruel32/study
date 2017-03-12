import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service'

@Component({
  selector: 'hello',
  template: `
    <div class="wrap">
      <h1 class="sec_txt line blue">{{title}}</h1>
      <input type="text" [(ngModel)]="title" (ngModelChange)="setNumber()" />
      <textarea [(ngModel)]="title"></textarea>
    </div>
  `,
  styleUrls: ['hello.scss'],
  providers : [DataServiceService]
})
export class HelloComponent {
  constructor(private dataServiceService:DataServiceService){
    this.title = dataServiceService.sayHello();
  }
  title = 'it works';
  public count:number=0;
  setNumber(){
    this.count++
    console.log("키변경에 따른 메서드 콜 : ", this.count);
  }
}
