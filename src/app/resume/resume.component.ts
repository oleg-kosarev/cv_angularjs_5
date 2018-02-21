import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  public education = [];
  public employment = [];
  public skills = [];

  constructor() {
    this.education =
      [{title: 'TITLE0', date_text: 'DATE_TEXT0', name: 'NAME0', text: 'TEXT0'},
      {title: 'TITLE1', date_text: 'DATE_TEXT1', name: 'NAME1', text: 'TEXT1'},
      {title: 'TITLE2', date_text: 'DATE_TEXT2', name: 'NAME2', text: 'TEXT2'}];
    this.employment =
      [{'title': 'TITLE01', 'date_text': 'DATE_TEXT01', 'name': 'NAME01', 'text': 'TEXT01'},
      {'title': 'TITLE0', 'date_text': 'DATE_TEXT0', 'name': 'NAME0', 'text': 'TEXT0'},
      {'title': 'TITLE1', 'date_text': 'DATE_TEXT1', 'name': 'NAME1', 'text': 'TEXT1'},
      {'title': 'TITLE2', 'date_text': 'DATE_TEXT2', 'name': 'NAME2', 'text': 'TEXT2'},
      {'title': 'TITLE3', 'date_text': 'DATE_TEXT3', 'name': 'NAME3', 'text': 'TEXT3'},
      {'title': 'TITLE4', 'date_text': 'DATE_TEXT4', 'name': 'NAME4', 'text': 'TEXT4'},
      {'title': 'TITLE5', 'date_text': 'DATE_TEXT5', 'name': 'NAME5', 'text': 'TEXT5'}];
    this.skills = [
      {
        'name': 'GraphicDesign',
        'icon': 'fa-pencil-square-o',
        'items': [
          {
            'name': 'NAME0',
            'value': '25'
          },
          {
            'name': 'NAME1',
            'value': '5'
          },
          {
            'name': 'NAME2',
            'value': '5'
          }
        ]
      }, {
        'name': 'Programming',
        'icon': 'fa-pencil-square-o',
        'items': [
          {
            'name': 'NAME0',
            'value': '95'
          },
          {
            'name': 'NAME1',
            'value': '75'
          },
          {
            'name': 'NAME2',
            'value': '65'
          },
          {
            'name': 'NAME3',
            'value': '45'
          },
          {
            'name': 'NAME4',
            'value': '20'
          },
          {
            'name': 'NAME5',
            'value': '10'
          }
        ]
      },
      {
        'icon': 'fa-pencil-square-o',
        'name': 'CMS_FRAMEWORK',
        'items': [
          {
            'name': 'NAME0',
            'value': '54'
          },
          {
            'name': 'NAME1',
            'value': '25'
          },
          {
            'name': 'NAME2',
            'value': '13'
          },
          {
            'name': 'NAME3',
            'value': '82'
          },
          {
            'name': 'NAME4',
            'value': '31'
          },
          {
            'name': 'NAME5',
            'value': '16'
          },
          {
            'name': 'NAME6',
            'value': '13'
          }
        ]
      },
      {
        'name': 'SITE_LAYOUT',
        'icon': 'fa-pencil-square-o',
        'items': [
          {
            'name': 'NAME0',
            'value': '84'
          },
          {
            'name': 'NAME1',
            'value': '92'
          }
        ]
      }
    ];
  }

  ngOnInit() {
    $(document).ready(function() {
      $('#resume').addClass('pt-page-current');
      $('.content div#resume .left_side').addClass('visible animated fadeInLeft');
      $('.content div#resume .right_side').addClass('visible animated fadeInRight');
      $('.content div#resume .box.awards').addClass('visible animated fadeInUp');
      $('.skills').addClass('animated');
      $('.skills .section .item .bar_outer .bar_inner').each(function(e) {
        let width = $(this).attr('data-width');
        width = (width < 9) ? 12 : ((width < 15) ? 15 : width);
        $(this).animate({
          'width': width + '%'
        }, 1000, function() {
          $(this).find('.text').fadeIn();
        });
      });
    });


  }

}
