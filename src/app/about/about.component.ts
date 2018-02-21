import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public personal_detalis = [];
  public tools_i_use = [];
  public images = [];
  public services = [];
  public testimonials = [];
  public my_awards = [];

  constructor() {
    this.personal_detalis = [{
      'ICON': 'user', 'TITLE': 'TITLE_USER', 'VALUE': 'VALUE_USER', 'LINK': '', 'TITLE_LINK': '', 'TARGET': ''
    }, {
      'ICON': 'calendar', 'TITLE': 'TITLE_CALENDAR', 'VALUE': 'VALUE_CALENDAR', 'LINK': '', 'TITLE_LINK': '', 'TARGET': ''
    }, {
      'ICON': 'map-marker', 'TITLE': 'TITLE_MAP', 'VALUE': 'VALUE_MAP', 'LINK': '', 'TITLE_LINK': '', 'TARGET': ''
    }, {
      'ICON': 'mobile', 'TITLE': 'TITLE_MOBILE', 'VALUE': 'VALUE_MOBILE', 'LINK': 'tel:+37125942693',
      'TITLE_LINK': 'DESC_MOBILE', 'TARGET': 'SELF'
    }, {
      'ICON': 'envelope', 'TITLE': 'TITLE_ENVELOPE', 'VALUE': 'VALUE_ENVELOPE', 'LINK': 'mailto:oleg_kosarev@w-services.eu',
      'TITLE_LINK': 'DESC_ENVELOPE', 'TARGET': 'SELF'
    }, {
      'ICON': 'external-link', 'TITLE': 'TITLE_LINK', 'VALUE': 'VALUE_LINK', 'LINK': 'http://w-services.eu',
      'TITLE_LINK': 'DESC_LINK', 'TARGET': 'BLANK'
    }];

    this.tools_i_use =
      [{'name': 'TTITLE0'},
      {'name': 'TTITLE1'},
      {'name': 'TTITLE2'},
      {'name': 'TTITLE3'},
      {'name': 'TTITLE4'},
      {'name': 'TTITLE5'},
      {'name': 'TTITLE6'}];

    this.services = [
      {
        'title': 'TITLE0', 'text': 'TEXT0', 'alias': 'website_layout'
      }, {
        'title': 'TITLE1', 'text': 'TEXT1', 'alias': 'web_development'
      }, {
        'title': 'TITLE2', 'text': 'TEXT2', 'alias': 'administration_servers'
      }];

    this.testimonials = [{
      'text': 'TEXT0', 'client': 'CLIENT0'
    }, {
      'text': 'TEXT1', 'client': 'CLIENT1'
    }, {
      'text': 'TEXT2', 'client': 'CLIENT2'
    }];
    this.my_awards = [{
      'date': 'DATE0', 'title': 'TITLE0', 'body': 'BODY0'
    }, {
      'date': 'DATE1', 'title': 'TITLE1', 'body': 'BODY1'
    }, {
      'date': 'DATE2', 'title': 'TITLE2', 'body': 'BODY2'
    }];
    this.images =
      [{'NAME_FILES': 'about_1.jpg', 'TITLE': 'TITLE0'},
      {'NAME_FILES': 'about_3.jpg', 'TITLE': 'TITLE2'},
      {'NAME_FILES': 'about_4.jpg', 'TITLE': 'TITLE3'}];
  }

  ngOnInit() {
    $(document).ready(function() {
      $('#about').addClass('pt-page-current');
      $('.left_side').addClass('visible animated fadeInLeft');
      $('.right_side').addClass('visible animated fadeInRight');
      $('.box.awards').addClass('visible animated fadeInUp');

      // accordion item clicker
      $('.accordion .item_btn').click(function() {
        if (!$(this).parents('.item').find('.item_text').is(':visible')) {
          // close previous active
          $('.accordion .item_btn.active').parent().next().slideUp('fast');
          $('.accordion .item_btn').removeClass('active');
          // icon change
          $('.accordion').find('.arrow i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
          $(this).parents('.item').find('.arrow i').removeClass('fa-plus-circle').addClass('fa-minus-circle');

          $(this).parents('.item').find('.item_text').slideDown('fast');
          $(this).addClass('active');
        } else {
          // icon change
          $(this).parents('.item').find('.arrow i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
          $(this).parents('.item').find('.item_text').slideUp('fast');
          $(this).removeClass('active');
        }

      });
    });
  }

}
