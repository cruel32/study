import { Injectable } from '@angular/core';

@Injectable()
export class ParentService {
  constructor() { }
  getName(){
    return "Parent 서비스!";
  }
}
