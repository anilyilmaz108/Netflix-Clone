import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-review-tvshows',
  templateUrl: './review-tvshows.component.html',
  styleUrls: ['./review-tvshows.component.css']
})
export class ReviewTvshowsComponent implements OnInit{
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  backdrop : string;
  actionMovieResult: any = [];


  constructor(private movieService:MovieService,private router:ActivatedRoute,private title:Title,private meta:Meta){
 
  }
  ngOnInit(): void {
    initFlowbite();
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
  
    this.getTv(getParamId);
    this.getVideo(getParamId);
    this.similarTvShows(getParamId);
  }

  
  getTv(id:any){
    this.movieService.getTvDetails(id).subscribe(async(result)=>{
        console.log(result,'gettvdetails#');
        this.getMovieDetailResult = await result;

        // updatetags
        this.title.setTitle(`${this.getMovieDetailResult.name} | ${this.getMovieDetailResult.tagline}`);
        this.meta.updateTag({name:'title',content:this.getMovieDetailResult.name});
        this.meta.updateTag({name:'description',content:this.getMovieDetailResult.overview});
     
        // facebook
        this.meta.updateTag({property:'og:type',content:"website"});
        this.meta.updateTag({property:'og:url',content:``});
        this.meta.updateTag({property:'og:title',content:this.getMovieDetailResult.name});
        this.meta.updateTag({property:'og:description',content:this.getMovieDetailResult.overview});
        this.meta.updateTag({property:'og:image',content:`https://image.tmdb.org/t/p/original/${this.getMovieDetailResult.backdrop_path}`});

        this.backdrop = `https://image.tmdb.org/t/p/original${this.getMovieDetailResult.backdrop_path}`;

    });
  }

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

    // action 
    similarTvShows(id:any) {
      this.movieService.fetchSimilarTvShows(id).subscribe((result) => {
        console.log(result, 'similarTvShows#');
        this.actionMovieResult = result.results;
      });
    }
}
