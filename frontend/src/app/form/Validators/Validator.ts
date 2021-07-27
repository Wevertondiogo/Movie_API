import { AbstractControl } from '@angular/forms';

export class Validator {
  static PasswordsMatch(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password === confirmPassword) return null;

    return control.get('confirmPassword')?.setErrors({ notMatch: true });
  }
}
