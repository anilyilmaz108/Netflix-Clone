import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.css']
})
export class StartedComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
