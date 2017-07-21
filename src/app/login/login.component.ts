import {Component, OnInit} from '@angular/core';

import {User} from "../services/user/user"
import {UserService} from "../services/user/user.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];

  constructor(private userService:UserService) {
  }

  ngOnInit() {

  }

  login()
  {
    this.userService.getUsers().then((users)=>{
      this.users=users
      console.log('user data is : ',this.users);
    });
  }

}
