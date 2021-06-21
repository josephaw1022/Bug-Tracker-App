import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeURL } from 'src/data/url/url.action';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(public location: Location, public route: ActivatedRoute) {}

  get currentUrl() {
    const URL = this.route.url;
    console.log(URL, 'URL = ');
    return URL;
  }
}
