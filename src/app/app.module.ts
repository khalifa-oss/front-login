import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/Signup/home.component';

import {UserService} from './service/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SingupComponent } from './component/SignIn/singup.component';
import { WelcomComponent } from './component/welcom/welcom.component';
import { AdminComponent } from './component/admin/admin.component';
import { DetailComponent } from './component/detail/detail.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UnathorizedComponent } from './component/unathorized/unathorized.component';
import {RouterModule} from '@angular/router';
import { ViewComponent } from './component/view/view.component';
// import {httpInterceptorProviders} from './Auth/AuthInterceptor';
// import {AuthService} from './Auth/auth.service';
import {TokenStorageService} from './Auth/token-storage.service';
// import {httpInterceptorProviders} from './Auth/AuthInterceptor';



@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    WelcomComponent,
    HomeComponent,
    AdminComponent,
    DetailComponent,
    NotFoundComponent,
    UnathorizedComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
