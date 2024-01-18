import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    initFlowbite();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
