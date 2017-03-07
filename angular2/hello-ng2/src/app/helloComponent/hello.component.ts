import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div class="wrap">
      <h1 class="sec_txt line blue">{{title}}</h1>
      <input type="text" [(ngModel)]="title" (ngModelChange)="setNumber()" />
      <textarea [(ngModel)]="title"></textarea>
    </div>
  `,
  styleUrls: ['hello.scss']
})
export class HelloComponent {
  title = 'it works';
  public count:number=0;

  setNumber(){
    this.count++
    console.log("키변경에 따른 메서드 콜 : ", this.count);
  }

}
