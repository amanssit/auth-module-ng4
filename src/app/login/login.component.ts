import {Component, OnInit} from '@angular/core';
import {Message} from 'primeng/primeng';

import {User} from "../services/user/user"
import {UserService} from "../services/user/user.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  msgs: Message[] = [];
  response:any={};

  constructor(private userService: UserService) {
  }

  ngOnInit() {

  }

  login(username, password) {
    this.user.username = username;
    this.user.password = password;
    this.userService.loginUser(this.user)
      .then(res=>{
this.response=res;
        if(this.response.status==200)
        {
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Login Success', detail:'Login Success'});
        }
        else {
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Login Faild', detail:this.response.msg});
        }
        console.log('login res : ',res);
      })
  }

}
