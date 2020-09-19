import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, merge } from 'rxjs';
import { filter, mapTo } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public loading$: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit() {
    const navigationStart$ = this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      mapTo(true)
    );

    const navigationEnd$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      mapTo(false)
    );

    this.loading$ = merge(navigationStart$, navigationEnd$);
  }
}
