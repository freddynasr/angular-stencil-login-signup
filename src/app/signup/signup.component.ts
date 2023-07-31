import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from '../nav.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  constructor(private nav: NavService) {}
  ngOnInit(): void {
    document.addEventListener('toLogin', (event) => {
      console.log('Received the custom register event: ', event);
      this.nav.navigate('dashboard/login');
    });
    document.addEventListener('formDataSubmitted', (event: any) => {
      console.log('Received the custom formDataSubmitted event: ', event);
      console.log(event.detail);
    });
  }
  ngOnDestroy(): void {
    document.removeEventListener('toLogin', () => {});
    document.removeEventListener('formDataSubmitted', () => {});
  }
}
