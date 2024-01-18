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
  myMoviesList: any = [];
  myTvShowsList: any = [];

  constructor(public mylistService: MylistService, private snackbar:MatSnackBar, private router: Router,){}
  ngOnInit(): void {
    initFlowbite();
    this.getLists();
  }

  
  getLists()
  {
    this.mylistService.getList(Constants.userId).subscribe((res)=>{
     this.myMoviesList = res;
     console.log(res);
    })
}

}
