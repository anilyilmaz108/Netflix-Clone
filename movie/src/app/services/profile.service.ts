import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService{


  constructor(private base:BaseService, private httpClient: HttpClient) {
    super(base.http);
   }


   public createAccount(userObj:any)
   {
     return this.postReq('/mylist',userObj)
   }

   public getProfiles(userId:number)
   {
     return this.getReq('/mylist?userId='+userId)
   }
}
