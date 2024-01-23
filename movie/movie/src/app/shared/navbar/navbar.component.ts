import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Constants } from 'src/app/core/constants';
import { ProfileService } from 'src/app/services/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { languageChanged } from 'src/app/store/language.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private fb:FormBuilder, public profileService: ProfileService, private router: Router, public translate: TranslateService, private store: Store<{ language : {language : string}}>){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
    this.store.dispatch(languageChanged({value: Constants.language, action: this.translate.currentLang}));

     if(translate.currentLang === "en"){
      Constants.language = "en-US";
    }else if(translate.currentLang === "tr"){
      Constants.language = "tr-TR";
    }else{
      Constants.language = "en-US";
    } 
  }
  profileLists: any = [];

  ngOnInit(): void {
    initFlowbite();
    this.getProfiles();
  }
  username = Constants.profileName;
  icon = Constants.icon;

  switchLang(lang: string) {
    this.translate.use(lang);
    this.store.dispatch(languageChanged({value: Constants.language, action: this.translate.currentLang}));
  }

  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');
    
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    }else
    {
        this.navbg = {}
    }
  }

  getProfiles()
  {
    this.profileService.getProfiles(Constants.userId).subscribe((res)=>{
     this.profileLists = res;
     console.log(this.profileLists);
    })
}

goToHome(profileName: string, icon: string){
  Constants.profileName = profileName;
  Constants.icon = icon;
  console.log(Constants.icon);
  this.router.navigateByUrl('/home');
}

}
