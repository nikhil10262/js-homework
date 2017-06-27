import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  users: User[] = [];
  

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }'; 
  private User = '{"id":"", "buyer_id":"", "email":"", "first_name": "", "last_name": "" }'; 
  private userDictionary = { 
    1: { "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" },
    2: { "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" },
    3: { "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }
  };

  constructor() { }


  getUsers() {
   this.users = Object.keys(this.userDictionary).map(key => this.userDictionary[key]);
   return this.userDictionary;
  }

  getUser(id: number) {
    if(id!=null){
    return this.userDictionary[id];
    }else{
      return JSON.parse(this.User );
    }
  }

  createUser(userInfo:any){    
          this.userDictionary[userInfo.id] = userInfo; 
          console.log(this.userDictionary)   
  }
  
  private logError(error: any) {
    console.error('service found an error: '+error);
  }

}
