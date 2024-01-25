import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { Constants } from 'src/app/core/constants';
import { MylistService } from 'src/app/services/mylist.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit{
  allData: any = [];
  myMoviesList: any = [];
  myTvShowsList: any = [];

  constructor(public mylistService: MylistService, private snackbar: MatSnackBar, private router: Router,){}
  ngOnInit(): void {
    initFlowbite();
    this.getLists();
  }

  
  getLists()
  {
    this.mylistService.getList(Constants.userId).subscribe((res)=>{
        console.log(res);
        this.allData = res;
    
      for (let index = 0; index < this.allData.length; index++) {
        if(this.allData[index].adult === false){
          this.myMoviesList.push(this.allData[index]);
        }else{
          this.myTvShowsList.push(this.allData[index]);
        }
      }
     
    })
}

deleteFavourites(id: any)
{
  this.mylistService.deleteList(id).subscribe((res)=>{
    this.allData.splice(res,1);    
    window.location.reload();
    this.snackbar.open('Movies deleted my list', 'Ok', {
      duration: 3000
    });
})
}

}
