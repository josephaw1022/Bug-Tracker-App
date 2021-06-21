import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public user: UserService, public route: Router) {}

  ngOnInit(): void {
    if (this.user.token == '') {
      this.route.navigate(['']);
    }
  }
}
