import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieService){}

  getMovieVideoResult:any;
  movieId:any;

  bannerResult: any = [];
  trendingMovieResult!: Movie[];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  title: String = "";
  desc: String = "";
  backdrop: String = "";
  rnd: number = 0;


  ngOnInit(): void {
    initFlowbite();
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
   
  }

  //Movie Trailer
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

  // bannerdata
  bannerData() {
    this.movieService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  // trending
  trendingData() {
    this.movieService.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      
      this.rnd = Math.floor(Math.random() * (this.trendingMovieResult.length));
      this.title = this.trendingMovieResult[this.rnd].title;
      this.desc = this.trendingMovieResult[this.rnd].overview;
      this.backdrop = `https://image.tmdb.org/t/p/original${this.trendingMovieResult[this.rnd].backdrop_path}`;
      this.movieId = this.trendingMovieResult[this.rnd].id;
      this.getVideo(this.movieId);

      console.log(this.backdrop);
    });
  }

  // action 
  actionMovie() {
    this.movieService.fetchActionMovies().subscribe((result) => {
      console.log(result, 'action#');
      this.actionMovieResult = result.results;
    });
  }




  // adventure 
  adventureMovie() {
    this.movieService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.movieService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.movieService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.movieService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.movieService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.movieService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
