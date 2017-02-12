import { Component, OnInit } from '@angular/core';

import { MembershipService } from '../membership.service';

import { UserRegistrationVM } from '../user-registration-vm';
import { UserRegistrationResponse } from '../user-registration-response';


@Component({
  selector: 'app-registration-admin',
  templateUrl: './registration-admin.component.html',
  styleUrls: ['./registration-admin.component.css']
})
export class RegistrationAdminComponent implements OnInit {
  user: UserRegistrationVM = new UserRegistrationVM();
  message: string = '';

  constructor(private auth: MembershipService) { }

  ngOnInit() {
  }

  register(): void {
    this.message = '';
    this.auth.registerAdmin(this.user).subscribe(
      (res) => {
        if (res.status === 200) {
          this.message = 'Dear Administrator, check your email now!';
          // TODO: navigate to home - http://stackoverflow.com/questions/40250297/angular-2-login-module-with-template 
        } else {
          this.message = 'Error:' + res.text;
        };
      },
      (err) => {
        console.log(err);
        this.message = 'Error:' + err.json();
      });
  }
}