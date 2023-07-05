import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  data = {
    email: '',
    password: '',
    isRememberMe: true,
  };

  form: FormGroup = this.fb.group({
    email: this.fb.control('user@example.com', [
      Validators.required,
      Validators.email,
    ]),
    password: this.fb.control('1q2w3e4R', [
      Validators.required,
      Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'),
    ]),
    isRememberMe: true,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

  makeFormControlUntouched(ctrl: FormControl) {
    ctrl.markAsUntouched();
  }

  getFormControl(ctrl: string) {
    return this.form.get(ctrl) as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
