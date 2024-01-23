import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { UserService } from 'src/app/services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private fb:FormBuilder, public userService: UserService, public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    initFlowbite();
  }

  createUserForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(1)]],
    privacy: [null, Validators.required]
  })

  get f(): { [key: string]: AbstractControl } {
    return this.createUserForm.controls;
  }

  createAccount()
  {
      this.userService.createAccount(this.createUserForm.value).subscribe((res)=>{
        console.log(res);
      })
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
