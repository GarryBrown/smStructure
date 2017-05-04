import { Component, OnInit } from '@angular/core';

import { PasswordService } from './password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [PasswordService]
})
export class PasswordComponent implements OnInit {
  doNotMatch: string;
  error: string;
  success: string;
  account: any;
  password: string;
  confirmPassword: string;

  constructor(private passwordService: PasswordService) { }

  ngOnInit() {
  }


  changePassword () {
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        } else {
            this.doNotMatch = null;
            this.passwordService.changePassword(this.password).subscribe(() => {
                this.error = null;
                this.success = 'OK';
            }, () => {
                this.success = null;
                this.error = 'ERROR';
            });
        }
    }

}
