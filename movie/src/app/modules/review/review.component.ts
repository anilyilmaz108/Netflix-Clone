import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { MovieService } from 'src/app/services/movie.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  actionMovieResult: any = [];


  constructor(private movieService:MovieService,private router:ActivatedRoute,private title:Title,private meta:Meta, public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    initFlowbite();
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
    this.similarMovies(getParamId);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  
  getMovie(id:any){
    this.movieService.getMovieDetails(id).subscribe(async(result)=>{
        console.log(result,'getmoviedetails#');
        this.getMovieDetailResult = await result;

        // updatetags
        this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});
     
        // facebook
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.original_title});
        this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`});

    });
  }

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

  getMovieCast(id:any)
  {
    this.movieService.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }

      // Similar Movies 
      similarMovies(id:any) {
        this.movieService.fetchSimilarMovies(id).subscribe((result) => {
          console.log(result, 'similarMovies#');
          this.actionMovieResult = result.results;
        });
      }
}
