import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  expandCollapse() {
    let header: HTMLElement;
    header = document.getElementById('header');
    if (header.className === 'header') {
      header.className += ' responsive';
    } else {
      header.className = 'header';
    }
  }

  onResize() {
    if (window.innerWidth > 1000) {
      let header: HTMLElement;
      header = document.getElementById('header');
      header.className = 'header';
    }
  }
}
