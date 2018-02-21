import { AppConfig } from '../app.config';
import {Component, OnInit, VERSION} from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  providers: [AppConfig]
})
export class FooterComponent implements OnInit {
  public appVersion: string;
  public appName: string;
  public angularJsVersion: string;
  public currentYear: number;
  public startYear: number;
  private currentTime: any = new Date();
  constructor(private appConfig: AppConfig) {
    this.angularJsVersion = VERSION.full;
    this.appVersion = this.appConfig.APP_VERSION;
    this.appName = this.appConfig.APP_NAME;
    this.startYear = 2016;
    this.currentYear = this.currentTime.getFullYear();
  }

  ngOnInit() {
    // footer load animations
    setTimeout(function() {
      $('.footer').animate({
        'opacity': '1'
      }, 150);
      $('.footer').css('display', 'block').addClass('animated fadeInDown');
    }, 300);

  }

}
