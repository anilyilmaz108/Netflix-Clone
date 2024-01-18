import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Constants } from 'src/app/core/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, public userService: UserService, private snackbar:MatSnackBar, private router: Router, public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    initFlowbite();
  }


  loginUserForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(1)]],
  })

  get f(): { [key: string]: AbstractControl } {
    return this.loginUserForm.controls;
  }

  loginAccount()
  {
    this.userService.getUser(this.loginUserForm.value.email!, this.loginUserForm.value.password!).subscribe((res)=>{
     console.log(res);
     if(res.length == 0)
     {
      this.snackbar.open('No such account found','Ok');
     }else{
      Constants.username = res[0].username;
      Constants.userId = res[0].id;
      console.log(Constants.userId);
      this.router.navigateByUrl('/selectuser');
     }

    })
}

switchLang(lang: string) {
  this.translate.use(lang);
}


}
