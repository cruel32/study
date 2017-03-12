import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {
  constructor() {}
  sayHello(){
    return "Hello 서비스!";
  }
}
