import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from 'src/app/models/movie';
import { MylistService } from 'src/app/services/mylist.service';

@Component({
  selector: 'app-movie-group',
  templateUrl: './movie-group.component.html',
  styleUrls: ['./movie-group.component.css']
})
export class MovieGroupComponent implements OnInit{
  @Input() title: string = "";
  @Input() movieResults: any;
  @Input() spinnerValue: boolean = false;
  @Input() path: string = "";
  @Input() movies: any = [];

  constructor(private myListService: MylistService, private _snackBar: MatSnackBar){}
  ngOnInit(): void {
  }


  addFavourites(movie: any){
    this.myListService.createList(movie).subscribe((res)=>{
      console.log(res);
      this.movies.push(res);
      this._snackBar.open('Movies added my list', 'Ok', {
        duration: 3000
      });
    }) 
  }

}
