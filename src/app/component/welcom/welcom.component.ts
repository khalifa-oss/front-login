import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {SignupInfo} from '../../Table/SignupInfo';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {
  ngOnInit(): void {
  }
//   currentuser:SignupInfo;
//
//   constructor( private  userService: UserService, private  router: Router) { }
//
//   ngOnInit() {
//     if(!this.currentuser){
//       this.router.navigate(['/login']);
//     }
//
//   }
// logout(){
//     this.userService.Logout().subscribe(data => { this.router.navigate(['/login']); });
// }
}
