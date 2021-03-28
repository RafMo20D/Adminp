import { Component, OnInit } from '@angular/core';

import { visitorsOptions , popularPostData} from "./data";
import { ChartType } from "./blog.model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

/**
 * Blog-dashboard component
 */
export class BlogComponent implements OnInit {

  // visitor chart
  visitorsOptions: ChartType;
  popularPostData;
  configData;
   // bread crumb items
   breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Blog', active: true }];

    /**
     * Fetches the data
     */
    this._fetchData();

    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };
  }


  private _fetchData() {
    this.visitorsOptions = visitorsOptions;
    this.popularPostData = popularPostData;
  }
}
