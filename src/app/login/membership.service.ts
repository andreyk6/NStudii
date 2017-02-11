import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

// TODO: is it possible to move it into a sing file 
import { UserLoginVM } from './user-login-vm';
import { UserRegistrationVM } from './user-registration-vm';
import { UserRegistrationResponse } from './user-registration-response';
import { UserCredentials } from './user-credentials';

@Injectable()
export class MembershipService {
  siteRootUrl: string = 'http://bogdankolomiec-001-site2.dtempurl.com';
  userCredentials: UserCredentials = null;

  constructor(private http: Http) {
    this.loadUserDataFromLocalStorage();
  }

  loadUserDataFromLocalStorage() {
    this.userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    console.log('ngOnInit' + this.userCredentials);
  }

  saveUserDataToLocalStorage() {
    localStorage.setItem('userCredentials', JSON.stringify(this.userCredentials));
    console.log('ngOnDestroy' + this.userCredentials);
  }

  public login(user: UserLoginVM): Promise<string> {
    return new Promise((resolve, reject) => {
      // TODO send HTTP request to get the tocken
      if (user.email === user.password) {
        this.userCredentials = {
          accessTocken: 'asd@!Hkjsahn01klAs',
          issued: new Date(2017, 1, 1),
          exipes: new Date(2018, 1, 1),
          expiresIn: 114920000,
          tokenType: 'barier',
          userName: user.email
        };
        resolve('tocken');
      } else {
        this.userCredentials = null;
        reject('error msg');
      }
      this.saveUserDataToLocalStorage();
    });
  }

  public register(user: UserRegistrationVM): Observable<UserRegistrationResponse> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    let body = `Email=${user.email}&Password=${user.password}&ConfirmPassword=${user.confirmPassword}`;

    return this.http.post(this.siteRootUrl + '/api/Account/RegisterUser', body, options)
      .map(res => {
        if (res.status === 200) {
          return {
            success: true,
            message: 'User registered'
          };
        } else {
          return {
            success: false,
            message: res.text
          };
        }
      });
  }
}
