import {Injectable} from '@angular/core';
declare var require: any;

@Injectable()
export class AppConfig {
  packInfo: any = require('../../package.json');
  APP_NAME = this.packInfo.name;
  APP_VERSION = this.packInfo.version;
  BASE_API_URL = 'http://api.oleg-kosarev.ga.loc/';
  API_V = 1;
}
