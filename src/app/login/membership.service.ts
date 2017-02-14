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
  }

  saveUserDataToLocalStorage() {
    localStorage.setItem('userCredentials', JSON.stringify(this.userCredentials));
  }

  public logout() {
    this.userCredentials = null;
    this.saveUserDataToLocalStorage();
  }

  public login(user: UserLoginVM): Observable<Response> {
    let options = this._getXWWWUrlEncodedHeaderOptions();
    let body = `grant_type=password&username=${user.email}&password=${user.password}`;

    return this.http.post(this.siteRootUrl + '/token', body, options)
      .map(res => {
        if (res.status === 200) {
          let data = res.json();
          this.userCredentials = {
            accessTocken: data.access_token,
            expiresIn: data.expires_in,
            tokenType: data.token_type,
            userName: user.email
          };
        } else {
          this.userCredentials = null;
        }
        this.saveUserDataToLocalStorage();
        return res;
      });
  }

  public registerAdmin(user: UserRegistrationVM): Observable<Response> {
    return this._register(user, 'Admin');
  }

  public register(user: UserRegistrationVM): Observable<Response> {
    return this._register(user, 'User');
  }

  private _register(user: UserRegistrationVM, role: string): Observable<Response> {
    let options = this._getXWWWUrlEncodedHeaderOptions();

    let body = `Email=${user.email}&Password=${user.password}&ConfirmPassword=${user.confirmPassword}`;

    return this.http.post(this.siteRootUrl + `/api/Account/Register${role}`, body, options);
  }

  private _getXWWWUrlEncodedHeaderOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}

