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

  yo() {
    let el: HTMLElement;
    el = document.getElementById('myLinks');
    if (el.className === 'links') {
      el.className += ' responsive';
    } else {
      el.className = 'links';
    }
  }
}
