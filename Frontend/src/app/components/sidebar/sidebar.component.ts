import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'dashboard',
    class: ''
  },
  {
    path: '/list-houses',
    title: 'List of houses',
    icon: 'house',
    class: ''
  },
  {
    path: '/common-places',
    title: 'Common Places',
    icon: 'emoji_events',
    class: ''
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: 'settings',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
