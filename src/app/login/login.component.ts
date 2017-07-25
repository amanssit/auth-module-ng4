import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/primeng';
import {Router} from "@angular/router"

import {CookieService} from 'angular2-cookie/core';

import {UserService} from "../services/user/user.service"
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msgs: Message[] = [];
  response: any = {};
  loginForm: FormGroup;

  constructor(private userService: UserService, private cookieService: CookieService, private router: Router, fb: FormBuilder) {
    this.loginForm = fb.group({
      'username':[null,Validators.required],
      'password': [null,Validators.required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ]
    })
  }

  ngOnInit() {

  }

  login(loginUser) {
    this.userService.loginUser(loginUser)
      .then(res => {
        this.response = res;
        if (this.response.status == 200) {
          this.msgs = [];
          this.msgs.push({severity: 'success', summary: 'Login Success', detail: 'Login Success'});
          this.cookieService.put('user_token', this.response.token);
          localStorage.user_token = this.response.token;
          this.router.navigate(['/dashboard/products']);
        }
        else {
          this.msgs = [];
          this.msgs.push({severity: 'error', summary: 'Login Faild', detail: this.response.msg});
        }
        console.log('login res : ', res);
      })
  }

}
