import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// TODO: is it possible to move it into a sing file 
import { UserLoginVM } from './user-login-vm';
import { UserRegistrationVM } from './user-registration-vm';
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
      if (this._login(user.email, user.password)) {
        resolve(true);
      } else {
        this.userCredentials = null;
        reject(false);
      }
      this.saveUserDataToLocalStorage();
    });
  }

  private _login(email: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.siteRootUrl + '/login',
      JSON.stringify({ email, password }),
      { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          this.userCredentials = {
            accessTocken: res.access_tocken,
            expiresIn: res.expires_in,
            tokenType: 'bearer',
            userName: email
          };
        }
        return res.success;
      });
  }
}
