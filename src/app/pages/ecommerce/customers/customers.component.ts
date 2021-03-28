import { Component, OnInit } from '@angular/core';

import { Customers } from './customers.model';

import { customersData } from './data';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

/**
 * Ecomerce Customers component
 */
export class CustomersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  customersData: Customers[];

  term: any;

  // page
  currentpage: number;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Customers', active: true }];

    this.currentpage = 1;

    /**
     * Fetches the data
     */
    this._fetchData();
  }

  /**
   * Customers data fetches
   */
  private _fetchData() {
    this.customersData = customersData;
  }
}
