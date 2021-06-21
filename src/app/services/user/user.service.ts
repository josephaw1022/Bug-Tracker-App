import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISignUp } from './usertypes';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // http options used for making API calls
  httpOptions: any;

  // the actual JWT token
  public token: string = '';

  // the token expiration date
  public token_expires: Date = new Date('August 19, 2075 23:15:30');

  // the username of the logged in user
  public username: string = '';

  public work: boolean = true;

  // error messages received from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: { 'Content-Type': 'application/json' },
    };
  }

  url: string = 'https://josephaw1022.pythonanywhere.com';

  public signup(user: any) {
    console.log('user = ', user);

    return this.http
      .post(
        'https://josephaw1022.pythonanywhere.com/createuser/',
        JSON.stringify(user),
        this.httpOptions
      )
      .subscribe(
        (data: any) => {},
        (err: any) => {
          this.work = false;
          console.log(err);
        }
      );
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user: any) {
    this.httpOptions = {
      headers: { 'Content-Type': 'application/json' },
    };

    this.http
      .post(
        this.url + '/api-token-auth/',
        JSON.stringify(user),
        this.httpOptions
      )
      .subscribe(
        (data: any) => {
          this.token = data.token;
        },
        (err: any) => {
          this.errors = err;
          console.log(err);
        }
      );
    this.httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      },
    };
  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http
      .post<any>(
        this.url + '/api-token-refresh/',
        JSON.stringify({ token: this.token }),
        this.httpOptions
      )
      .subscribe(
        (data: any) => {
          this.updateData(data['token']);
        },
        (err: any) => {
          this.errors = err['error'];
        }
      );
  }

  public logout() {
    this.token = '';
    // this.token_expires = '';
    this.username = '';
  }

  private updateData(token: any) {
    this.token = token;
    this.errors = [];

    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    console.log(token_decoded);
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
  }
}
