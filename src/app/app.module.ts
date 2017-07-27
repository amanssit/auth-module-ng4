import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {RouterModule, Routes} from '@angular/router';
import {Http, HttpModule , RequestOptions, XHRBackend } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { NgUploaderModule } from 'ngx-uploader';

import {NgProgressModule} from "ngx-progressbar";
import { BrowserXhr } from '@angular/http';
import { NgProgressBrowserXhr } from 'ngx-progressbar';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {HttpService} from "./services/http-service/http-service.service"

import {GrowlModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import {UserService} from "./services/user/user.service";
import { ProductComponent } from './dashboard/product/product.component';
import { HeaderComponent } from './common/header/header.component'

import {ProductService} from "./services/product/product.service";
import {AuthGaurdService} from "./services/auth-gaurd/auth-gaurd.service";
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';
import { ProductUploadComponent } from './dashboard/product-upload/product-upload.component';



const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard/profile', component: ProfileComponent,canActivate:[AuthGaurdService]},
  {path: 'dashboard/products', component: ProductComponent,canActivate:[AuthGaurdService]},
  {path: 'dashboard/product-upload', component: ProductUploadComponent,canActivate:[AuthGaurdService]},
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProductComponent,
    HeaderComponent,
    NumberOnlyDirective,
    ProductUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    NgUploaderModule,
    NgProgressModule,

    GrowlModule,
    PasswordModule,
    DataTableModule,SharedModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule

  ],
  providers: [
    // {
    //   provide: HttpService,
    //   useFactory: (backend: XHRBackend, options: RequestOptions) => {
    //     return new HttpService(backend, options);
    //   },
    //   deps: [XHRBackend, RequestOptions]
    // },
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
    {
      provide: HttpService,
      useFactory:httpServiceFactory,
      deps: [XHRBackend, RequestOptions]
    },
    UserService,CookieService,ProductService,ConfirmationService,AuthGaurdService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

//This is for http interceptor
export function httpServiceFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}
