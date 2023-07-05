import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  data = {
    email: 'user@example.com',
    password: '1q2w3e4r',
    isRememberMe: true
  };

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }
}
