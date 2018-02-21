import { AppConfig } from '../app.config';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  providers: [AppConfig]
})
export class PortfolioComponent implements OnInit {
  public masonryItems: any;
  public category = [];
  constructor(private http: HttpClient, private appConfig: AppConfig) {}

  ngOnInit() {
    this.http.get(this.appConfig.BASE_API_URL + '/v' + this.appConfig.API_V + '/items/portfolio').subscribe(data => {
      this.masonryItems = data;
      console.log(this.masonryItems);

    });
    this.category = [{title: 'ALL', alias: '*', active: true},
    {title: 'WEB-PROGRGRAMMING', alias: 'web-programming', active: false},
    {title: 'SITE-CREATE', alias: 'site-create', active: false}];


    // @Todo Direction hover
    // start $('.box-container .box').each(function()
    $('.box-container .box').each(function() {
      $(this).on('mouseenter mouseleave', function(e) {
        const $this = $(this),
          width = $this.width(),
          height = $this.height();

        const x = (e.pageX - $this.offset().left - (width / 2)) * (width > height ? (height / width) : 1),
          y = (e.pageY - $this.offset().top - (height / 2)) * (height > width ? (width / height) : 1);

        // top = 0, right = 1, bottom = 2, left = 3
        const dir_num = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        const degrees = 179 * (dir_num > 1 ? 1 : -1) * (e.type === 'mouseenter' ? 1 : -1);
        const el_class = e.type === 'mouseenter' ? '.front' : '.back';
        const axis = dir_num % 2 ? 'Y' : 'X';

        $this.children(el_class)
          .animate({transform: degrees}, {
            step: function(now, fx) {
              $(this).css('transform', 'rotate' + axis + '(' + now + 'deg)');
            },
            duration: 400
          })
          .siblings()
          .animate({transform: degrees}, {
            step: function(now, fx) {
              $(this).css('transform', 'rotate' + axis + '(' + (degrees - now) + 'deg)');
            },
            duration: 400
          });
      });
      // end $('.box-container .box').each(function()
    });


  }

}
