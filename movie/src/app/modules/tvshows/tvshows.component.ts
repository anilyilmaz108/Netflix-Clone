import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit{

  getMovieVideoResult:any;
  movieId:any;

  trendingMovieResult!: any[];
  
  title: String = "";
  desc: String = "";
  backdrop: String = "";
  rnd: number = 0;


  ngOnInit(): void {
    initFlowbite();
    this.tvShowsData();
  
  }

  constructor(private movieService: MovieService){}

    //Tv Trailer
    getVideo(id:any)
    {
      this.movieService.getTvVideo(id).subscribe((result)=>{
          console.log(result,'getTvVideo#');
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
      this.movieService.fetchTvShows().subscribe((result) => {
        console.log(result, 'tvshowsresult#');
        this.trendingMovieResult = result.results;
        
        this.rnd = Math.floor(Math.random() * (this.trendingMovieResult.length));
        this.title = this.trendingMovieResult[this.rnd].name;
        this.desc = this.trendingMovieResult[this.rnd].overview;
        this.backdrop = `https://image.tmdb.org/t/p/original${this.trendingMovieResult[this.rnd].backdrop_path}`;
        this.movieId = this.trendingMovieResult[this.rnd].id;
        this.getVideo(this.movieId);
  
        console.log(this.backdrop);
      });
    }
}
