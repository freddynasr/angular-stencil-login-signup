import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { NavService } from '../nav.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private nav: NavService) {}
  ngOnInit(): void {
    document.addEventListener('register', (event) => {
      this.nav.navigate('dashboard/signup');
    });
    document.addEventListener('loginEvent', (event: any) => {
      console.log('Received the custom LoginEvent event: ', event);
      console.log(event.detail);
    });
  }
  ngOnDestroy(): void {
    document.removeEventListener('register', () => {});
    document.removeEventListener('loginEvent', () => {});
  }
}
