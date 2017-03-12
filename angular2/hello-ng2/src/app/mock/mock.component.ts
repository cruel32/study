import { Component } from '@angular/core';
import { MockService } from './mock.service';
import { User } from './user';

@Component({
  selector: 'mock',
  template : `
    <b>이름 출력</b>
    <div *ngFor="let o of listUser">
      {{o.id}} | {{o.name}}
    </div>
  `,
  styleUrls: ['./mock.component.css'],
  providers : [MockService]
})
export class MockComponent {
  constructor(private userService:MockService) {
    this.listUser = userService.getUser();
  }
  listUser : User[];
}
