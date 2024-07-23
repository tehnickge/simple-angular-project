import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function checkRegExp(regExp: RegExp): ValidatorFn {

}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  public validatorsForm = new FormGroup({ email: new FormControl('') });

  public ngOnInit(): void {}

  public handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
    }
    this.myForm.get(['login'])?.value;
  }
}
