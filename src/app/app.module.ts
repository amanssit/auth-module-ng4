import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import {GrowlModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import {UserService} from "./services/user/user.service";
import { ProductComponent } from './dashboard/product/product.component';
import { HeaderComponent } from './common/header/header.component'


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard/profile', component: ProfileComponent},
  {path: 'dashboard/products', component: ProductComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,

    GrowlModule,
    PasswordModule,
    DataTableModule,SharedModule
  ],
  providers: [UserService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
