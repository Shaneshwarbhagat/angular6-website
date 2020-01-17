import { Injectable } from '@angular/core';
import {RequestInfo, InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  
  createDb() {
    const users = [
      { id: 1, firstName: 'Shaneshwar', lastName: 'Bhagat', email: 'shanibhagat91@gmail.com', password:'shani123' },
      { id: 2, firstName: 'Shani', lastName: 'Bhagx', email: 'shanib@gmail.com', password:'shani1234'}
    ];
    return {users};
  }

  getToken(user){
    return 'Token is generated'
  }

  post(reqInfo: RequestInfo){
    console.log(reqInfo);
    if(reqInfo.id==="login"){
      console.log("From Login");
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      return reqInfo.utils.createResponse$( ()=> {
        const users = reqInfo.collection.find(user => {
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
        });

        let responseBody = {};
        if(users){
          responseBody ={
            id: users.id,
            firstName:users.firstName,
            lastName:users.lastName,
            email:users.email,
            token: this.getToken(users)
          }
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404 
        };
        options.statusText = options.status===200?'ok':'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;


      }); //end of createResponse

    }else if(reqInfo.id==="signup"){
      reqInfo.id=null; //if want to have id make id to null
      console.log("From Signup");

    }
  } //as using post request now
}
