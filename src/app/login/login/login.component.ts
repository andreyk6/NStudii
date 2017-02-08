import { Component, OnInit } from '@angular/core';
import { UserLoginVM } from '../user-login-vm';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLoginVM = new UserLoginVM();
  message: string = '';

  constructor(private auth: MembershipService) { }

  ngOnInit() {
  }

  login(): void {
    this.message = '';
    this.auth.login(this.user)
      .then((tocken) => {
        // TODO: navigate to home - http://stackoverflow.com/questions/40250297/angular-2-login-module-with-template 
      })
      .catch((errMsg) => { this.message = errMsg; });
  }
}