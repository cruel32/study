import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div class="wrap">
      <h1 class="sec_txt line blue">{{title}}</h1>
      <input type="text" [(ngModel)]="title" />
      <textarea [(ngModel)]="title"></textarea>
    </div>
  `,
  styleUrls: ['hello.scss']
})
export class HelloComponent {
  title = 'it works';
}
