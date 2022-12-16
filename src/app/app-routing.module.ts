import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {HomeComponent} from './component/Signup/home.component';
import {SingupComponent} from './component/SignIn/singup.component';
import {WelcomComponent} from './component/welcom/welcom.component';
import {DetailComponent} from './component/detail/detail.component';
import {AdminComponent} from './component/admin/admin.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {UnathorizedComponent} from './component/unathorized/unathorized.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // public page
  {
    path: 'signup',
    component: HomeComponent
  },
  {
    path: 'login',
    component: SingupComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '401',
    component: UnathorizedComponent
  },
  // user+admin
  {
    path: 'welcom',
    component: WelcomComponent,
      },
  // admin
  {
    path: 'detail/:id',
    component: DetailComponent,
      },
  {
    path: 'admin',
    component: AdminComponent,
     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  }
