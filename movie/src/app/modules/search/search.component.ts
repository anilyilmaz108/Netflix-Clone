import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import { MovieService } from 'src/app/services/movie.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(private service:MovieService,private title:Title,private meta:Meta, public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    initFlowbite();
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  
}
