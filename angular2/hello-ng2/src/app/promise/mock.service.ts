import { Injectable } from '@angular/core';
import { USERS } from './mock-user';
import { User } from './user';

@Injectable()
export class MockService {
  constructor(){}

  getUser():Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUserDelay():Promise<User[]>{
    return new Promise<User[]>(resolve =>
      setTimeout(resolve,1000)
    ).then(()=>this.getUser()); //이해안됨
  }

  getRequest(status:boolean):Promise<any>{
    if(status){
      return Promise.resolve("요청을 승낙합니다").then((reason)=>{
        return reason;
      },(reason)=>{
        return "NO";
      })
    } else {
      return Promise.reject("요청을 거부합니다").then((reason)=>{
        return "YES";
      },(reason)=>{
        return reason;
      })
    }
  }
}
