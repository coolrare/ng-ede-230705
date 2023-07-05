import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'user@example.com',
    password: '1q2w3e4R',
    repeatPassword: '1q2w3e4R',
  };

  form = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    repeatPassword: this.fb.control('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form.reset(this.data);
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

  onSubmit() {
  }

}
