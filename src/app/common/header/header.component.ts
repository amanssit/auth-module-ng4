import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) {
    this.router.events.subscribe((event) => {
      console.log(event);

    });
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}
