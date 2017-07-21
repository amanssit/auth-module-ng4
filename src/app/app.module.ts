import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import {GrowlModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import {UserService} from "./services/user/user.service"


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard/profile', component: ProfileComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,

    GrowlModule,
    PasswordModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
