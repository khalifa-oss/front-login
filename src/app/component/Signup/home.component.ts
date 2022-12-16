import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import {SignupInfo} from '../../Table/SignupInfo';
import {AuthService} from '../../Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  validmessage: string;

  signupInfo = new SignupInfo();
  errorMessage: string ;

  constructor(private authService: AuthService, private  router: Router) {
  }

  ngOnInit() {
  }


  registrer() {
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        this.router.navigate(['/login']);
      }
      , error => {
        console.log(error);
        this.errorMessage = 'this user is already exist';
      }
    );
  }

}



