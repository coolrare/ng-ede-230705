import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

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

  form = this.fb.group({
    email: 'user@example.com',
    password: '1q2w3e4R',
    isRememberMe: true
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
