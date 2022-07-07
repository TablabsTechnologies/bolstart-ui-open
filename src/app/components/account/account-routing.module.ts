import { RouterModule, Routes } from '@angular/router';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile-new',
    component: NewProfileComponent
  },
  {
    path: 'forget/password',
    component: ForgotpasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
