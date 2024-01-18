import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private base:BaseService, private httpClient: HttpClient) {
    super(base.http);
   }


   public createAccount(userObj:any)
   {
     return this.postReq('/users',userObj)
   }

   public getUser(email:string, password:string)
   {
     return this.getReq('/users?email='+email+'&password='+password)
   }
}
