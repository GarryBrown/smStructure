import { Component, OnInit } from '@angular/core';
import { STORECHECK, TEACHING } from "../../education.constants";

@Component({
  selector: 'app-planning-edu',
  templateUrl: './planning-edu.component.html',
  styleUrls: ['./planning-edu.component.scss']
})
export class PlanningEduComponent implements OnInit {
  
  types: Array<string> = [
    STORECHECK,
    TEACHING
  ];
  constructor() { }

  ngOnInit() {
  }

}
