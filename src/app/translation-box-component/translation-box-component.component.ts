import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-translation-box-component',
  templateUrl: './translation-box-component.component.html',
  styleUrls: ['./translation-box-component.component.css']
})
export class TranslationBoxComponentComponent implements OnInit {

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.addLangs(['en', 'ua']);

    let browserLang: string = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ua/) ? browserLang : 'ua');
  }

}
