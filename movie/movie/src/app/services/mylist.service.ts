import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MylistService extends BaseService {
  constructor(private base:BaseService, private httpClient: HttpClient) {
    super(base.http);
   }


   public createList(userObj:any)
   {
     return this.postReq('/favourites',userObj)
   }

   public getList(userId:number)
   {
     return this.getReq('/favourites?userId='+userId)
   }

   public deleteList(id:number)
   {
    return this.httpClient.delete(`http://localhost:3000/favourites/${id}?id=int`);
   }
}
