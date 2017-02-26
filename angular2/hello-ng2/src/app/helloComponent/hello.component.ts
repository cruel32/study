import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1 class="sec_txt">{{title}}</h1>
    <input type="text" [(ngModel)]="title" />
    <textarea [(ngModel)]="title"></textarea>
  `,
  styles: [`.sec_txt {color:orange}`]
})
export class HelloComponent {
  title = 'it works';
}
