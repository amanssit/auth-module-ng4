import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule , RequestOptions, XHRBackend } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {HttpService} from "./services/http-service/http-service.service"

import {GrowlModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import {UserService} from "./services/user/user.service";
import { ProductComponent } from './dashboard/product/product.component';
import { HeaderComponent } from './common/header/header.component'

import {ProductService} from "./services/product/product.service"


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
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,

    GrowlModule,
    PasswordModule,
    DataTableModule,SharedModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  providers: [UserService,CookieService,ProductService,ConfirmationService,
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
