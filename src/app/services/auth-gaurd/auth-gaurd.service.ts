import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../user/user.service";

@Injectable()
export class AuthGaurdService implements CanActivate{

  constructor(private userService:UserService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    return this.userService.isAuth();

  }

}
