import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {SignupInfo} from '../../Table/SignupInfo';

import {AuthLoginInfo} from '../../Table/AuthLoginInfo';
import {AuthService} from '../../Auth/auth.service';
import {TokenStorageService} from '../../Auth/token-storage.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {


  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage1 = '';
  errorMessage = ''
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private  router: Router) { }

  ngOnInit() {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getAuthorities();
    //  }
  }

  onSubmit() {
    console.log(this.form);
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.router.navigate(['/admin']);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authoritie);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

       // this.reloadPage();
        this.roles = this.tokenStorage.getAuthorities();
             },
      error => {

        this.errorMessage = 'Username or password is incorrect';
       // this.errorMessage1 = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  // form: FormGroup;
  // errormessage = '';
  // user: SignupInfo = new SignupInfo();
  //
  // constructor(private userService: UserService, private router: Router) {
  // }
  //
  //
  // ngOnInit() {
  //   // this.form = new FormGroup({
  //   //     username: new FormControl('', Validators.required),
  //   //     password: new FormControl('', Validators.required),
  //   //   }
  //   // );
  //   if (this.userService.currentUserValue){
  //     this.router.navigate(['/welcom']);
  //     return;
  //   }
  // }
  // login(){
  //   this.userService.login(this.user).subscribe(data => {
  //     data
  //     this.router.navigate(['/welcom']); },
  //     error => {this.errormessage = 'username or password is incorrect'; });
  // }

}









