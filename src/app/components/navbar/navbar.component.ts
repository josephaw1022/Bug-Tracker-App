import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {
  constructor(public mediaMatcher: MediaMatcher) {}

  isSmall: any;

  ngOnInit(): void {
    const data = of(this.mediaMatcher.matchMedia('(max-width: 700px)'));
  }

  ngDoCheck(): void {
    this.isSmall = this.mediaMatcher.matchMedia('(max-width: 700px)');
  }
}
