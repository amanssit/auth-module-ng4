import {Component, OnInit} from '@angular/core';

import {UserService} from "../services/user/user.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: any = {};
  response: any = {};

  constructor(private userService: UserService) {
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
          alert(this.response.msg)
        }
        else{
          alert(this.response.message)
        }
      })
      .catch(err=>console.log(err.message))


  }
}
