import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AccountApiService } from './account-api.service';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AccountComponent, LoginComponent, ForgotpasswordComponent, NewProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    AccountRoutingModule,
  ],
  providers: [AccountApiService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '761689346542-r4m604edknk2jmuq99cr9tssm7j5r7ut.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('419759909345362')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class AccountModule { }
