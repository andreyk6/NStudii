import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MembershipService } from '../membership.service';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-user-box-component',
  templateUrl: './user-box-component.component.html',
  styleUrls: ['./user-box-component.component.css']
})
export class UserBoxComponentComponent implements OnInit {
  constructor(private auth: MembershipService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  logIn() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'Login';
  }
  registration() {
    const modalRef = this.modalService.open(RegistrationComponent, { windowClass: '' });
    modalRef.componentInstance.name = 'Registration';
  }

  logOut() {
    this.auth.logout();
  }

}
