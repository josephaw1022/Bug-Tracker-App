import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public route: Router,
    public _userService: UserService
  ) {}

  public user: any;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  hideform = false;

  checkForm(): void {
    this.hideform = !this.hideform;
    setTimeout(() => {
      console.log('token here ');
      console.log(this._userService.token);
      this.route.navigate(['home']);
    }, 300);
  }

  ngOnInit(): void {
    this.user = {
      username: '',
      password: '',
    };
  }

  login() {
    this._userService.login({
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    });
    this.checkForm();
  }

  refreshToken() {
    this._userService.refreshToken();
  }

  logout() {
    this._userService.logout();
  }
}
