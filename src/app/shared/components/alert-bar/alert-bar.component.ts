import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.scss'],
 
})
export class AlertBarComponent implements OnInit {
  

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
    
  }

  open(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 3000,
    })
  }

}
