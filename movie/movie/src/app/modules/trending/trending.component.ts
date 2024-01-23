import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit{
  getMovieVideoResult:any;
  movieId:number;

  trendingMovieResult!: Movie[];
  
  title: String = "";
  desc: String = "";
  backdrop: String = "";
  rnd: number = 0;
  spinnerValueTrending: boolean = false;


  ngOnInit(): void {
    initFlowbite();
    this.tvShowsData();
  
  }

  constructor(private movieService: MovieService){}

    //Tv Trailer
    getVideo(id:any)
    {
      this.movieService.getMovieVideo(id).subscribe((result)=>{
          console.log(result,'getMovieVideo#');
          result.results.forEach((element:any) => {
              if(element.type=="Trailer")
              {
                this.getMovieVideoResult = element.key;
              }
          });
  
      });
    }

    // tvshows
    tvShowsData() {
      this.movieService.bannerApiData().subscribe((result) => {
        console.log(result, 'trendingallresult#');
        this.trendingMovieResult = result.results;
        if(this.trendingMovieResult.length === 0){
          this.spinnerValueTrending = true;
       }else{
        this.spinnerValueTrending =false;
       }
        this.rnd = Math.floor(Math.random() * (this.trendingMovieResult.length));
        this.title = this.trendingMovieResult[this.rnd].title;
        this.desc = this.trendingMovieResult[this.rnd].overview;
        this.backdrop = `https://image.tmdb.org/t/p/original${this.trendingMovieResult[this.rnd].backdrop_path}`;
        this.movieId = this.trendingMovieResult[this.rnd].id;
        this.getVideo(this.movieId);
  
        console.log(this.backdrop);
      });
    }
}
