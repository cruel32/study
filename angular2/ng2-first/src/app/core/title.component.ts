import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  template: `
  <h1 highlight *ngIf="title">{{title}}</h1>
  by <b>{{user}}</b>`
})
export class TitleComponent {
  @Input() title = '';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.nickName;
  }
}