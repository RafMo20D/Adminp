import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steptwoverification',
  templateUrl: './steptwoverification.component.html',
  styleUrls: ['./steptwoverification.component.scss']
})
export class SteptwoverificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 // set the currenr year
 year: number = new Date().getFullYear();
}
