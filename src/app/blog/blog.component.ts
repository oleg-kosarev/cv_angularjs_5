import { AppConfig } from '../app.config';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [AppConfig]
})
export class BlogComponent implements OnInit {

  posts: any;
  constructor(private http: HttpClient, private appConfig: AppConfig) {}

  ngOnInit(): void {
    this.http.get(this.appConfig.BASE_API_URL + '/v' + this.appConfig.API_V + '/items/post').subscribe(data => {
      this.posts = data;
    });
  }
}
