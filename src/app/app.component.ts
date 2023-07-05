import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  data = {
    email: 'user@example.com',
    password: '1q2w3e4R',
    isRememberMe: true,
  };

  form: FormGroup = this.fb.group({
    email: this.fb.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this.fb.control('', [
      Validators.required,
      Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'),
    ]),
    isRememberMe: true,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    this.form.setValue(this.data);
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

  resetForm() {
    this.form.reset(this.data);
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
