import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// angular-font-awesome
import {AngularFontAwesomeModule} from 'angular-font-awesome';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// Bootstrap modules
import {AlertModule} from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { NgxGalleryModule } from 'ngx-gallery';
// Angular Perfect Scrollbar
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


// Import routes
import {RouterModule, Routes} from '@angular/router';

// Import NgMasonryGridModule
import { NgMasonryGridModule } from 'ng-masonry-grid';

// All Components
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {LanguageComponent} from './language/language.component';
import {MenuComponent} from './menu/menu.component';
import {SocialIconsComponent} from './social-icons/social-icons.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioDetalisComponent } from './portfolio-detalis/portfolio-detalis.component';
import { BlogDetalisComponent } from './blog-detalis/blog-detalis.component';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent,
    data: {title: 'PAGES.HOME.TITLE', id: '1'}
  }, {
    path: 'home',
    component: HomeComponent,
    data: {title: 'PAGES.HOME.TITLE', id: '1'}
  }, {
    path: 'about',
    component: AboutComponent,
    data: {title: 'PAGES.ABOUT.TITLE', id: '2'}
  }, {
    path: 'resume',
    component: ResumeComponent,
    data: {title: 'PAGES.RESUME.TITLE', id: '3'}
  }, {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {title: 'PAGES.PORTFOLIO.TITLE', id: '4'}
  }, { path: 'portfolio/:alias', component: PortfolioDetalisComponent,
    children: [
      { path: '', component: PortfolioComponent },
      { path: ':alias', component: PortfolioDetalisComponent }
    ]
  }, {
    path: 'blog',
    component: BlogComponent,
    data: {title: 'PAGES.BLOG.TITLE', id: '4'}
  }, { path: 'blog/:alias', component: BlogDetalisComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: ':alias', component: BlogDetalisComponent }
    ]
  },  {path: '**', redirectTo: 'home'}

];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LanguageComponent,
    MenuComponent,
    SocialIconsComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    PortfolioDetalisComponent,
    BlogDetalisComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
        appId: 'OlegKosareApp'
    }),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    NgMasonryGridModule,
    AngularFontAwesomeModule,
    PerfectScrollbarModule,
    NgxGalleryModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      {useHash: true, enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
