import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISignUp } from 'src/app/services/user/usertypes';
import { initialSignUpState } from '../../services/user/usertypes';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss'],
})
export class SignupformComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public user: UserService,
    public route: Router
  ) {}

  public submit_object: ISignUp = initialSignUpState;

  signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
  });

  hideform = false;

  submitForm(): void {
    this.submit_object = {
      username: this.signupForm.controls['username'].value,
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value,
      first_name: this.signupForm.controls['first_name'].value,
      last_name: this.signupForm.controls['last_name'].value,
    };
    this.hideform = !this.hideform;
    this.user.signup(this.submit_object);

    setTimeout((): void => {
      this.route.navigate(['home']);
    }, 2000);
  }

  ngOnInit(): void {}
}
