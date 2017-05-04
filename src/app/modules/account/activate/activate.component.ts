import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
  providers: [CookieService]
})
export class ActivateComponent implements OnInit {

  constructor(
    private cookieService: CookieService,) { 
    this.checkCookie();
  }

  ngOnInit() {
  }


  checkCookie() {
        //this.cookieService.set('jwt', 'dasdasdsdasdas');
        //this.cookieService.delete('jwt');
        console.log('cookie === ');
        console.log(this.cookieService.get('jwt'));
        console.log('cookie === ');
        
    }


}
