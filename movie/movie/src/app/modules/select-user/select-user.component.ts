import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Constants } from 'src/app/core/constants';
import { ProfileService } from 'src/app/services/profile.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit{
  constructor(private fb:FormBuilder, public profileService: ProfileService, private router: Router, public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }
  profileLists: any = [];

  ngOnInit(): void {
    initFlowbite();
    this.getProfiles();
    this.profileLists.next()
  }

  createProfileForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(1)]],
    icon: ['', Validators.required],
    userId: [`${Constants.userId}`]
  })

  get f(): { [key: string]: AbstractControl } {
    return this.createProfileForm.controls;
  }

  addProfile()
  {
    //console.log(this.createProfileForm.value.icon);
   
    this.profileService.createAccount(this.createProfileForm.value).subscribe((res)=>{
      console.log(res);
    }) 
  }

  getProfiles()
  {
    this.profileService.getProfiles(Constants.userId).subscribe((res)=>{
     this.profileLists = res;
    })
}

goToHome(profileName: string, icon: string){
  Constants.profileName = profileName;
  Constants.icon = icon;
  console.log(Constants.icon);
  this.router.navigateByUrl('/home');
}


switchLang(lang: string) {
  this.translate.use(lang);
}

}
