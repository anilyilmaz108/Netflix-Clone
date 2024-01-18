import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  // trendingmovieapidata 
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}&language=${Constants.language}`);
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}&language=${Constants.language}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28&language=${Constants.language}`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12&language=${Constants.language}`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16&language=${Constants.language}`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35&language=${Constants.language}`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99&language=${Constants.language}`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878&language=${Constants.language}`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53&language=${Constants.language}`);
  }

    // tv-shows
    fetchTvShows(): Observable<any> {
      return this.http.get(`${this.baseurl}/discover/tv?api_key=${this.apikey}&language=${Constants.language}&&sort_by=popularity.desc`);
    }

    //bannerapidata -> trending
    bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}&language=${Constants.language}`);
   }

      // similar-movies
      fetchSimilarMovies(movieId: number): Observable<any> {
        return this.http.get(`${this.baseurl}/movie/${movieId}/similar?api_key=${this.apikey}&language=${Constants.language}&&sort_by=popularity.desc`);
      }

       // similar-tv-shows
       fetchSimilarTvShows(tvShowsId: number): Observable<any> {
        return this.http.get(`${this.baseurl}/tv/${tvShowsId}/similar?api_key=${this.apikey}&language=${Constants.language}&&sort_by=popularity.desc`);
      }


    // getTvVideo
    getTvVideo(data: any): Observable<any> {
      return this.http.get(`${this.baseurl}/tv/${data}/videos?api_key=${this.apikey}`)
    }

      // getTvdatails
  getTvDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/tv/${data}?api_key=${this.apikey}&language=${Constants.language}`)
  }

  // upcoming-movies
  getUpcomingMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/upcoming?api_key=${this.apikey}&language=${Constants.language}`);
   }



}
