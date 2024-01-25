import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initFlowbite } from 'flowbite';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { addMovie } from 'src/app/store/state/movies.state';

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

  movie: Observable<any>;
  movies: any;
  
  ngOnInit(): void {
    initFlowbite();
    this.tvShowsData();
    this.movie = this.store.select("movie");
    this.store.select("movie").subscribe(lesson => {
      this.movies = lesson;
    });
  }

  constructor(private movieService: MovieService, private store: Store<any>){}

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
       //const m: Movie = new Movie();
       this.trendingMovieResult.map((movie) => {
        this.store.dispatch(addMovie(movie));
       });
       
       
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
