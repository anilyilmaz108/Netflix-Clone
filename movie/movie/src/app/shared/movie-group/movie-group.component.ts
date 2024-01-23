import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-group',
  templateUrl: './movie-group.component.html',
  styleUrls: ['./movie-group.component.css']
})
export class MovieGroupComponent implements OnInit{
  @Input() title: string = "";
  @Input() movieResults: any = [];
  @Input() spinnerValue: boolean = false;
  @Input() path: string = "";

  constructor(){}
  ngOnInit(): void {
  }



}
