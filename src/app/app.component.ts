import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  data = {
    email: '',
    password: '',
    isRememberMe: true
  };

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.data);
      // console.log(form.value);
    }
  }
}
