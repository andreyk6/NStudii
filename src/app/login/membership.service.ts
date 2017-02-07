import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http, Headers } from '@angular/http';

// TODO: is it possible to move it into a sing file 
import { UserLoginVM } from './user-login-vm';
import { UserRegistrationVM } from './user-registration-vm';
import { UserCredentials } from './user-credentials';

@Injectable()
export class MembershipService implements OnInit, OnDestroy {

  userCredentials: UserCredentials = null;

  constructor() { }

  ngOnInit() {
    this.userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
  }

  ngOnDestroy() {
    localStorage.setItem('userCredentials', JSON.stringify(this.userCredentials));
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
    });
  }
}
