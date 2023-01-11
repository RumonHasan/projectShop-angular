import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleTheme } from 'src/app/store/actions';

@Component({
  selector: 'app-header',
  // connect to the template url
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  themeState!: any;

  constructor(
    private localStore: Store<{
      storeReducer: {};
    }>
  ) {
    // subscribing the data to update the variable for darkmode
    this.localStore.select('storeReducer').subscribe((data: any) => {
      this.themeState = data.toggleTheme;
    });
  }

  ngOnInit(): void {}

  // switching theme
  switchTheme() {
    this.localStore.dispatch(toggleTheme());
  }
}
