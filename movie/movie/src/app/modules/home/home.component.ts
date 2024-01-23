import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerService } from 'ngx-spinner';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieService, private spinner: NgxSpinnerService){}

  getMovieVideoResult:any;
  movieId:number;

  bannerResult!: Movie[];
  trendingMovieResult!: Movie[];
  actionMovieResult!: Movie[];
  adventureMovieResult!: Movie[];
  animationMovieResult!: Movie[];
  comedyMovieResult!: Movie[];
  documentaryMovieResult!: Movie[];
  sciencefictionMovieResult!: Movie[];
  thrillerMovieResult!: Movie[];

  title: String = "";
  desc: String = "";
  backdrop: String = "";
  rnd: number = 0;

  spinnerValueTrending: boolean = false;
  spinnerValueActions: boolean = false;
  spinnerValueAdventure: boolean = false;
  spinnerValueAnimation: boolean = false;
  spinnerValueComedy: boolean = false;
  spinnerValueDocumentary: boolean = false;
  spinnerValueScienceFiction: boolean = false;
  spinnerValueThriller: boolean = false;
  spinnerValueBanner: boolean = false;

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
      this.bannerResult = result.results;
      if(this.bannerResult.length === 0){
        this.spinnerValueBanner = true;
     }else{
      this.spinnerValueBanner =false;
     }
    });
  }

  // trending
  trendingData() {
    this.movieService.trendingMovieApiData().subscribe((result) => {
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

  // action 
  actionMovie() {
    this.movieService.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
      if(this.actionMovieResult.length === 0){
        this.spinnerValueActions = true;
     }else{
      this.spinnerValueActions =false;
     }
    });
  }




  // adventure 
  adventureMovie() {
    this.movieService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
      if(this.adventureMovieResult.length === 0){
        this.spinnerValueAdventure = true;
     }else{
      this.spinnerValueAdventure =false;
     }
    });
  }


  // animation 
  animationMovie() {
    this.movieService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
      if(this.animationMovieResult.length === 0){
        this.spinnerValueAnimation = true;
     }else{
      this.spinnerValueAnimation =false;
     }
    });
  }


  // comedy 
  comedyMovie() {
    this.movieService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
      if(this.comedyMovieResult.length === 0){
        this.spinnerValueComedy = true;
     }else{
      this.spinnerValueComedy =false;
     }
    });
  }

  // documentary 
  documentaryMovie() {
    this.movieService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
      if(this.documentaryMovieResult.length === 0){
        this.spinnerValueDocumentary = true;
     }else{
      this.spinnerValueDocumentary =false;
     }
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.movieService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
      if(this.sciencefictionMovieResult.length === 0){
        this.spinnerValueScienceFiction = true;
     }else{
      this.spinnerValueScienceFiction =false;
     }
    });
  }

  // thriller
  thrillerMovie() {
    this.movieService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
      if(this.thrillerMovieResult.length === 0){
        this.spinnerValueThriller = true;
     }else{
      this.spinnerValueThriller =false;
     }
    });
  }
}
