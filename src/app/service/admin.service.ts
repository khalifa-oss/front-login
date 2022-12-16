import { Injectable } from '@angular/core';
import {SignupInfo} from '../Table/SignupInfo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // currentUser: SignupInfo;
  // headers: HttpHeaders;
  //
  // constructor(private http: HttpClient) {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   this.headers = new HttpHeaders({authorization: 'Bearer' + this.currentUser.token,
  //   'Content-Type': 'application/json;charset=UTF-8'});
  // }
  // findAllUser(): Observable<any>{
  //   return this.http.get('/server/admin/all', {headers: this.headers});
  // }
}
