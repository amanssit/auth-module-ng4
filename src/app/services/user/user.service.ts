import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {User} from './user';
import {CookieService} from "angular2-cookie/core";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  constructor(private http: Http, private cookieService: CookieService, private router: Router) {
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrl = 'http://localhost:3000/user';

  getUsers(): Promise<User[]> {
    return this.http.get(this.userUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError)
  }

  registerUser(user): Promise<User> {
    return this.http.post(this.userUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  loginUser(user): Promise<User> {
    return this.http.post(this.userUrl + '/auth', JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  isAuth() {
    return localStorage.user_token != null;
  }

  logout() {
    delete localStorage.user_token;
    this.cookieService.removeAll();
    this.router.navigate(['/login']);

  }

}
