import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivateByEmailService } from "../../services/activate-by-email.service";



@Component({
  selector: 'app-activate-by-email',
  templateUrl: './activate-by-email.component.html',
  styleUrls: ['./activate-by-email.component.scss']
})
export class ActivateByEmailComponent implements OnInit {
  error: string;
  success: string;
 
  constructor(
    private activate: ActivateByEmailService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.activate.get(params['key']).subscribe(() => {
        this.error = null;
        this.success = 'OK';
      }, () => {
        this.success = null;
        this.error = 'ERROR';
      });
    });
  }

  login() {
    this.router.navigate(['/login']);
  }
}
