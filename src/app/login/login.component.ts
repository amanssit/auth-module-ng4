import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/primeng';
import {Router} from "@angular/router"

import {CookieService} from 'angular2-cookie/core';

import {UserService} from "../services/user/user.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  msgs: Message[] = [];
  response: any = {};

  constructor(private userService: UserService, private cookieService: CookieService,private router:Router) {
  }

  ngOnInit() {

  }

  login(username, password) {
    this.user.username = username;
    this.user.password = password;
    this.userService.loginUser(this.user)
      .then(res => {
        this.response = res;
        if (this.response.status == 200) {
          this.msgs = [];
          this.msgs.push({severity: 'success', summary: 'Login Success', detail: 'Login Success'});
          this.cookieService.put('user_token',this.response.token);
          this.router.navigate(['/dashboard/profile']);
        }
        else {
          this.msgs = [];
          this.msgs.push({severity: 'error', summary: 'Login Faild', detail: this.response.msg});
        }
        console.log('login res : ', res);
      })
  }

}
