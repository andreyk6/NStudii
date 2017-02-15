import { Component, OnInit } from '@angular/core';
import { MembershipService } from './login/membership.service';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TeachMe!';

  constructor(private auth: MembershipService) {
  }

  ngOnInit() {
  }

}
