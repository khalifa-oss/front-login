import { Component, OnInit } from '@angular/core';
import {SignupInfo} from '../../Table/SignupInfo';
import {AdminService} from '../../service/admin.service';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  errorMessage: string;
  board:string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getall().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
//   userList: Array<SignupInfo>;
//
//   constructor(private  adminService: AdminService , private router: Router) { }
//
//   ngOnInit() {
//     this.findAllUsers();
//   }
// findAllUsers(){
//     this.adminService.findAllUser().subscribe(data => {this.userList = data; });
// }
// detail(user: SignupInfo){
//     localStorage.setItem('detailUser' , JSON.stringify(user));
//     this.router.navigate(['/detail', user.id]);

}

