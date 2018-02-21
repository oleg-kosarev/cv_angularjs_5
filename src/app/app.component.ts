import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private win_width: number;
  private pageHeight: number;
  private pHeight: number;

  constructor() {
    this.win_width = $(window).width(); // 1351
  }
  ngOnInit() {
    if (this.win_width > 991) {
      this.pageHeight = $(window).height(); // 311
      this.pHeight = $('.content div.pt-page-current').height(); // 281
      if (this.pHeight !== this.pageHeight && this.pHeight !== 1) {
        $('#wrapper .main_content').css('height', this.pHeight + 'px');
      } else {
        $('#wrapper .main_content').css('height', this.pageHeight - 30 + 'px');
      }
    }
    $(window).on('resize', function() {
      const win_width = $(window).width();
      if (win_width > 991) {
        const pageHeight = $(window).height();
        const pHeight = $('.content > div.pt-page-current').height();
        if (pHeight !== pageHeight) {
          $('#wrapper .main_content').css('height', pHeight + 'px');
        } else {
          $('#wrapper .main_content').css('height', pageHeight - 30 + 'px');
        }
        if ($(window).width() > 991) {
          $('#wrapper .main_content').css('height', $(window).height() - 30 + 'px');
        }
      }
    });
    // page load animations
    setTimeout(function() {
      $('.loading_overlay').fadeOut('fast', function() {

        $('#wrapper').animate({
          'opacity': '1'
        }, 200);
        if ($('#wrapper').width() !== 300 && $('#wrapper').width() !== 470) {
          $('#wrapper').addClass('animated fadeInDown');
        }
        setTimeout(function() {
          $('.main_menu').animate({
            'opacity': '1'
          }, 150);
          $('.main_menu').addClass('animated fadeInLeft');

          $('.social_icons').animate({
            'opacity': '1'
          }, 150);
          $('.social_icons').addClass('animated fadeInRight');

          $('#wrapper').removeClass('animated fadeInDown');
        }, 300);
      });
    }, 750);

    // plus social icon click
    $('.social_icons a.plus').on('click', function() {
      if ($(this).next().hasClass('visible')) {
        $(this).next().slideUp(function() {
          $(this).removeClass('visible');
        });
      } else {
        $(this).next().slideDown(function() {
          $(this).addClass('visible');
        });
      }
    });

    // plus social icon hover
    $('.social_icons li.more_social_icons_li').hover(
      function() {
        if (!$(this).find('.more_social_icons').hasClass('visible')) {
          $(this).find('.more_social_icons').slideDown(function() {
            $(this).addClass('visible');
          });
        }
      },
      function() {
        if ($(this).find('.more_social_icons').hasClass('visible')) {
          $(this).find('.more_social_icons').slideUp(function() {
            $(this).removeClass('visible');
          });
        }
      }
    );
  }
}
