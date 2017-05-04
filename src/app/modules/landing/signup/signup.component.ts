import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string;
  agree: boolean;
  credentials: any;
  message: string;

  constructor(
    private backend: SignupService,
    private route: Router
  ) {
    this.credentials = {};
    this.agree = false;
  }

  ngOnInit() {
  }
  signUp() {
    this.backend.signUp({
      username: this.username,
      agree: this.agree
    }).subscribe(data => {
      this.message = 'Ваша заявка успешно отправлена! Ожидайте звонка!';
      console.log(data);
      let timeoutId = setTimeout(() => {
        this.route.navigate(['/landing']);
      }, 2000);


    });
  }
}
