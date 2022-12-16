import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from '../Table/AuthLoginInfo';
import {Observable} from 'rxjs';
import {JwtResponse} from '../Table/JwtResponse';
import {SignupInfo} from '../Table/SignupInfo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo) {
    const body = JSON.stringify(credentials);

    return this.http.post<JwtResponse>('/server/student/login', body, httpOptions);
  }

  signUp(info: SignupInfo) {
    const body = JSON.stringify(info);
    return this.http.post('/server/management/api/student/save', body, httpOptions);
  }
}
