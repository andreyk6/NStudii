import { Component } from '@angular/core';
import { MembershipService } from './login/membership.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeachMe!';

  constructor(private auth: MembershipService) {
  }
}
