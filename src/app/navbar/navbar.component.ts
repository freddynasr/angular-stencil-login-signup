import { Component } from '@angular/core';
import { NavService } from '../nav.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public nav: NavService) {}
  activeLink = '';
  navigate(route: string, activeLink: string) {
    this.nav.navigate(route);
    this.activeLink = activeLink;
  }
}
