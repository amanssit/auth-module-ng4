import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"
import {Message} from 'primeng/primeng';

import {UserService} from "../services/user/user.service"
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: any = {};
  response: any = {};
  msgs: Message[] = [];

  registerForm:FormGroup;

  constructor(private router:Router,private userService: UserService,private fb:FormBuilder) {
    this.registerForm=fb.group({
      'fullname':[null,Validators.required],
      'username':[null,Validators.required],
      'password':[null,Validators.required],
      'city':[null,Validators.required]
    });
  }

  ngOnInit() {
  }

  register(fullname, city, email, password) {

    this.data.username = email;
    this.data.password = password;
    this.data.name = fullname;
    this.data.city = city;
    this.userService.registerUser(this.data)
      .then((res) => {
        this.response = res;
        if (this.response.status == 200) {
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Register Success', detail:this.response.msg});
          setTimeout( ()=> {
            this.router.navigate(['/login']);
          },1000);

        }
        else{
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Registration Faild', detail:this.response.message});
        }
      })
      .catch(err=>console.log(err.message))


  }
}
