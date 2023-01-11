import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// custom row height
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drawerState: boolean = true;
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  // project details
  projects: any = [];

  constructor(
    private localStore: Store<{ storeReducer: { projectData: any } }>
  ) {
    // get the project data
    this.localStore.select('storeReducer').subscribe((data) => {
      this.projects = data.projectData;
    });
  }

  ngOnInit(): void {
    console.log(this.projects);
  }

  // receiving column count change from products header
  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
  }
  // get category from filter
  onShowCategory(newCategory: string): void {}
}
