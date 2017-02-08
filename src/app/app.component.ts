import { Component } from '@angular/core';
import { MembershipService } from './login/membership.service';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeachMe!';

  constructor(private auth: MembershipService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
