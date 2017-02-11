import { Component, OnInit } from '@angular/core';

import { MembershipService } from '../membership.service';

import { UserRegistrationVM } from '../user-registration-vm';
import { UserRegistrationResponse } from '../user-registration-response';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: UserRegistrationVM = new UserRegistrationVM();
  message: string = '';

  constructor(private auth: MembershipService) { }

  ngOnInit() {
  }

  register(): void {
    this.message = '';
    this.auth.register(this.user)
      .subscribe((res) => {
        if (res.success) {
          this.message = res.message;
          // TODO: navigate to home - http://stackoverflow.com/questions/40250297/angular-2-login-module-with-template 
        } else {
          this.message = 'Error:' + res.message;
        };
      });
  }
}