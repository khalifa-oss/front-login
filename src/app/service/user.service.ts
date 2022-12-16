import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import {SignupInfo} from '../Table/SignupInfo';
import {map} from 'rxjs/operators';
import {TokenStorageService} from '../Auth/token-storage.service';

const httpOption = {headers: new HttpHeaders({'Content-type': 'application/json'})};


@Injectable()
export class UserService {


  constructor(private http: HttpClient, private tokenStorageservice: TokenStorageService) {
      }

    // login(user: SignupInfo): Observable<any> {
  //
  //   //authenticate(username, password) {
  //     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user.username + ':' + user.password) });
  //
  //     return this.http.get<any>('/server/user/login', {headers}).pipe(
  //       map(
  //         userData => {
  //           sessionStorage.setItem('username', user.username);
  //           return userData;
  //         }
  //       )
  //     );
    //
    // const headers = new HttpHeaders(user ? {authorization: 'Basic' + btoa(user.username + ':' + user.password)} : {});
    // return this.http.get<any>('/server/user/login', {headers}).pipe(map(response => {
    //     if (response) {
    //       localStorage.setItem('currentUser', JSON.stringify(response));
    //       this.currentUserSubject.next(response);
    //
    //     }
    //     return response;
    //   })
    // );
  // }

  // Logout() {
  //   return this.http.post('/server/user/logout', {}).pipe(map(response => {
  //       localStorage.removeItem('currentUser');
  //       this.currentUserSubject.next(null);
  //     })
  //   );
  // }

  getUser() {
    return this.http.get('/server/user', { responseType: 'text' } );
  }

  // createUser(user) {
  //   const body = JSON.stringify(user);
  //   return this.http.post('/server/user/registration', body, httpOption);
  // }

  getall(){
    return this.http.get('/server/management/api/student/all', { responseType: 'text' });
  }
  getone(id: number){
    const token = this.tokenStorageservice.getToken();
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + token });
    return this.http.get('/server/management/api/student/' + id);
  }
}
