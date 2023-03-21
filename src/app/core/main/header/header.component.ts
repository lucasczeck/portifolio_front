import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sideMenu: boolean = false;

  toggleSideMenu() {
    this.sideMenu = !this.sideMenu;
  }
}
