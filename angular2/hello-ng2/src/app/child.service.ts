import { Injectable } from '@angular/core';
import { ParentService } from './parent.service';

export interface Child {
  getData();
}

@Injectable()
export class FirstChild implements Child {
  constructor(private parent:ParentService) {

  }
  getData(){
    return [
      {Child : 'FirstChild 서비스'},
      {parent : this.parent.getName() }
    ]
  }
}

@Injectable()
export class SecondChild extends ParentService implements Child {
  getData(){
    return [
      {Child : 'SecondChild 서비스' },
      {parent : super.getName() }
    ]
  }
}

