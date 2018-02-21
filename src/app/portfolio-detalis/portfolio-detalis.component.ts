import {AppConfig} from '../app.config';
import {ProjectInfo, ImagesProjectInfo, VideoProjectInfo} from './projectInfo';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {NgxGalleryOptions, NgxGalleryImage} from 'ngx-gallery';

@Component({
  selector: 'app-portfolio-detalis',
  templateUrl: './portfolio-detalis.component.html',
  providers: [AppConfig]
})
export class PortfolioDetalisComponent implements OnInit {
  test: any;
  modalRef: BsModalRef;
  alias: string;
  private sub: any;
  public project: any;
  public images: object;
  galleryOptions: NgxGalleryOptions[];
  constructor(
    private Aroute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private appConfig: AppConfig,
    private modalService: BsModalService) {


  }
  openModal(template: TemplateRef<any>, test) {
    this.modalRef = this.modalService.show(template);
    this.test = test;

  }
  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnails: false,
        previewDescription: true,
        previewCloseOnEsc: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true,
        previewInfinityMove: true
      }
    ];
    this.sub = this.Aroute.params.subscribe(params => {
      this.alias = params['alias'];
      console.log(this.alias);
      this.project = this.http.get<ProjectInfo>
        (this.appConfig.BASE_API_URL + '/v' + this.appConfig.API_V + '/items/detail/' + this.alias).subscribe(
        data => {
          console.log(data);
          if (typeof data === 'object') {
            this.project = data;
            this.images = data.images;
          } else {
            this.router.navigate(['/portfolio']);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
        );
    });


  }

}
