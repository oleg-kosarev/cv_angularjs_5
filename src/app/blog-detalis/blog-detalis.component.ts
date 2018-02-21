import {AppConfig} from '../app.config';
import {PostInfo} from './postInfo';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blog-detalis',
  templateUrl: './blog-detalis.component.html',
  providers: [AppConfig]
})
export class BlogDetalisComponent implements OnInit {

  alias: string;
  private sub: any;
  public post: PostInfo;
  public postState = false;
  constructor(private Aroute: ActivatedRoute, private router: Router, private http: HttpClient, private appConfig: AppConfig) {}

  ngOnInit() {
    this.sub = this.Aroute.params.subscribe(params => {
      this.alias = params['alias'];
      this.http.get<PostInfo>
        (this.appConfig.BASE_API_URL + '/v' + this.appConfig.API_V + '/items/detail/' + this.alias).subscribe(data => {
          console.log(data);
          if (typeof data === 'object') {
            this.post = {
              title: data.title,
              user: data.user,
              date: data.date,
              tags: data.tags,
              hidden_body: data.hidden_body,
              about_author: data.about_author,
              type: data.type,
              images: [],
              video: []
            };
          } else {
            this.router.navigate(['/blog']);
          }
        });
    });
  }

}
