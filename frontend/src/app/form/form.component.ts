import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validator } from './Validators/Validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  signup!: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.signup = this._fb.group(
      {
        name: [
          '',
          Validators.compose([
            Validators.min(3),
            Validators.required,
          ]),
        ],
        email: [
          '',
          Validators.compose([Validators.email, Validators.required]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ]),
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: Validator.PasswordsMatch,
      }
    );
  }

  public onSubmit(): void {
    console.log(this.signup.value);
  }

  get nameRequired(): boolean {
    const controller = this.signup.get('name');
    return controller?.errors?.required;
  }
  get errorMinName(): boolean {
    const controller = this.signup.get('name');
    return (controller?.dirty || controller?.touched) && controller.errors?.minlength;
  }

  get emailRequired(): boolean {
    const controller = this.signup.get('email');
    return controller?.errors?.required;
  }
  get passwordRequired(): boolean {
    const controller = this.signup.get('password');
    return controller?.errors?.required;
  }
  get errorMinPassword(): boolean {
    const controller = this.signup.get('password');
    return (controller?.dirty || controller?.touched) && controller.errors?.minlength;
  }
  get confirmPasswordRequired(): boolean {
    const controller = this.signup.get('confirmPassword');
    return controller?.errors?.required;
  }
  get notPasswordMatch(): boolean {
    const controller = this.signup.get('confirmPassword');
    return (controller?.dirty || controller?.touched) && controller?.errors?.notMatch
  }
}
