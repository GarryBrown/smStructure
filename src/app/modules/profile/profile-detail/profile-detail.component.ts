import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions, Response} from '@angular/http';

import { ProfileDetailService } from './profile-detail.service';
import { Account } from '../../../models';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
  providers: [ProfileDetailService]
})
export class ProfileDetailComponent implements OnInit {

  user: Account;


  constructor(
    private profileDetailService: ProfileDetailService

   ) {

    }

  ngOnInit() {
    this.profileDetailService.getProfile()
      .then( user => this.user = user);
  }

  update() {
    this.profileDetailService.updateProfile(this.user);
    console.log('Данные успешно обновлены');
  }

  updateAvatar(newAvatar) {
    this.user.imageUrl = newAvatar;
    console.log(this.user);
  }



}
