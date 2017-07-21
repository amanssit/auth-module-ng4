import {Component, OnInit} from '@angular/core';

import {User} from "../services/user/user"
import {UserService} from "../services/user/user.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};


  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }

  login(username, password) {
    this.user.username = username;
    this.user.password = password;
    this.userService.loginUser(this.user)
      .then(res=>{
        console.log('login res : ',res);
      })
  }

}
