import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  data = {
    firstName: 'John',
    lastName: 'Doe',
    emails: [
      'user@example.com',
      'user2@example.com',
      'user3@example.com',
    ],
    password: '1q2w3e4R',
    repeatPassword: '1q2w3e4R',
  };

  form: FormGroup = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    emails: this.fb.array([
      this.fb.control('', [Validators.required]),
      this.fb.control('', [Validators.required]),
      this.fb.control('', [Validators.required]),
    ]),
    password: this.fb.control('', [Validators.required]),
    repeatPassword: this.fb.control('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  getFormArray(ctrlName: string) {
    return this.form.get(ctrlName) as UntypedFormArray;
  }

  addEmailField() {
    this.getFormArray('emails').push(this.fb.control('', [Validators.required]));
  }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    // this.form.reset(this.data);
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

  onSubmit() {
  }

}
