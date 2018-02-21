import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public textsRotation = [];
  constructor() {}

  ngOnInit() {
    this.textsRotation = [
      {name: 'TEXT0', image: 'slider_1.jpg'},
      {name: 'TEXT1', image: 'slider_2.jpg'},
      {name: 'TEXT2', image: 'slider_3.jpg'},
      {name: 'TEXT3', image: 'slider_2.jpg'}
    ];

    $(document).ready(function() {
      $('#home').addClass('pt-page-current');
    });
  }

}
