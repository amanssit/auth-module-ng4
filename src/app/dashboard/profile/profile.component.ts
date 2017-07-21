import { Component, OnInit } from '@angular/core';
import {CookieService} from "angular2-cookie/core"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private cookieService:CookieService) {
   console.log('Cookie data : ',this.cookieService.getAll());
  }

  ngOnInit() {
  }

}
