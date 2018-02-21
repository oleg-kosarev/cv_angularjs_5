import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
declare var require: any;

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
})
export class LanguageComponent implements OnInit {
  public languages = [];
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('us');
    this.languages = [
      {'name': 'Russian', 'code': 'ru', 'active': true},
      {'name': 'Latvian', 'code': 'lv', 'active': true},
      {'name': 'English', 'code': 'us', 'active': true},
      {'name': 'Ukraine', 'code': 'ua', 'active': false}
    ];
  }
  ngOnInit() {
    // footer load animations
    setTimeout(function() {
      $('.languages').animate({
        'opacity': '1'
      }, 150);
      $('.languages').css('display', 'block').addClass('animated fadeInDown');
    }, 300);

  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
