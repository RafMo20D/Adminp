import { Component, OnInit } from '@angular/core';

import { walletRadialChart, overviewChart, transactionsData, bitconinChart, ethereumChart, litecoinChart } from './data';

import { ChartType, Transactions } from './crypto.model';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  walletRadialChart: ChartType;
  overviewChart: ChartType;
  bitconinChart: ChartType;
  ethereumChart: ChartType;
  litecoinChart: ChartType;

  transactionsData: Transactions[];

  configData;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Crypto', active: true }];

    this._fetchData();

    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };
  }


  private _fetchData() {
    this.walletRadialChart = walletRadialChart;
    this.overviewChart = overviewChart;
    this.transactionsData = transactionsData;
    this.bitconinChart = bitconinChart;
    this.ethereumChart = ethereumChart;
    this.litecoinChart = litecoinChart;
  }
}
