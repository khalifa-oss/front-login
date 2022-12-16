import { Component, OnInit } from '@angular/core';
import {SignupInfo} from '../../Table/SignupInfo';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../Auth/token-storage.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 public user;
  constructor(private tokenStorageService: TokenStorageService, private userService: UserService, private route: ActivatedRoute) {
  }
  ngOnInit() {this.get(this.route.snapshot.params.id);
  }


  get(id: number){
   // if (this.tokenStorageService.getToken())
      this.userService.getone(id).subscribe(data => { this.user = data; }, error => {console.log(error); });
    }

  }

  // userId: string;
  // currentUser: SignupInfo
  //
  // constructor( private  router: Router, private route: ActivatedRoute) {
  //   this.currentUser = JSON.parse(localStorage.getItem('detailUser'));
  //
  // }
  //
  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {if (params.has('id')){
  //     this.userId = params.get('id');
  //   }});
  // }


