import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menuItems = [];
  constructor() {
    this.menuItems = [
      {'title': 'GENERAL.MAIN_MENU.HOME', 'url': '', 'icon': 'home', 'class': 'home'},
      {'title': 'GENERAL.MAIN_MENU.ABOUT', 'url': 'about', 'icon': 'user', 'class': 'about'},
      {'title': 'GENERAL.MAIN_MENU.RESUME', 'url': 'resume', 'icon': 'tasks', 'class': 'resume'},
      {'title': 'GENERAL.MAIN_MENU.PORTFOLIO', 'url': 'portfolio', 'icon': 'picture-o', 'class': 'portfolio'},
      {'title': 'GENERAL.MAIN_MENU.BLOG', 'url': 'blog', 'icon': 'list', 'class': 'blog'},
      {'title': 'GENERAL.MAIN_MENU.CONTACT', 'url': 'contact', 'icon': 'envelope', 'class': 'contact'}
    ];
  }

  ngOnInit() {
  }

}
