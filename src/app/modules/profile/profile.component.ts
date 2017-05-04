import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tabLinks = [
    {label: 'Профиль', link: 'profile', icon: 'account_circle'},
    {label: 'Юр.лица', link: 'customers', icon: 'assignment_ind'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
