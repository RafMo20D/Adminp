import { Component, OnInit } from '@angular/core';

import { icons } from './data';

@Component({
  selector: 'app-boxicons',
  templateUrl: './boxicons.component.html',
  styleUrls: ['./boxicons.component.scss']
})

/**
 * Boxicons component
 */
export class BoxiconsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  icons;
  solid = "";
  regular = "";
  logos = "";
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Icons' }, { label: 'Boxicons', active: true }];

    this.icons = icons;
    for (let entry of icons) {
      switch (entry.type_of_icon) {
        case "SOLID":
          this.logos += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                      <i class="bx bxs-'+ entry.name + '"></i> bx bxs-' + entry.name + '\
                  </div>';
          break;
        case 'LOGO':
          this.solid += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                  <i class="bx bxs-'+ entry.name + '"></i> bx bxs-' + entry.name + '\
              </div>';
          break;
        default:
          this.regular += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                  <i class="bx bx-'+ entry.name + '"></i> bx bx-' + entry.name + '\
              </div>';
      }
    }
    document.getElementById("solid").innerHTML = this.solid;
    document.getElementById("logos").innerHTML = this.logos;
    document.getElementById("regular").innerHTML = this.regular;
  }
}
