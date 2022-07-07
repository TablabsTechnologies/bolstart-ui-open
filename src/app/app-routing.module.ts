import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './guard/login.guard';
import { NgModule } from '@angular/core';
import { UserNotFoundGuard } from './guard/user-not-found.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/login',
    pathMatch: 'full'
  },
  { path: 'account', loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule), canActivate: [UserNotFoundGuard] },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), canActivate: [LoginGuard] },
  { path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule), canActivate: [LoginGuard] },
  { path: 'mynetwork', loadChildren: () => import('./components/network/network.module').then(m => m.NetworkModule), canActivate: [LoginGuard] },
  { path: 'messaging', loadChildren: () => import('./components/messaging/messaging.module').then(m => m.MessagingModule), canActivate: [LoginGuard] },
  { path: 'perks', loadChildren: () => import('./components/perks/perks.module').then(m => m.PerksModule) },
  { path: 'company', loadChildren: () => import('./components/company/company.module').then(m => m.CompanyModule), canActivate: [LoginGuard] },
  { path: 'settings', loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule), canActivate: [LoginGuard] },
  { path: 'investor', loadChildren: () => import('./components/investor/investor.module').then(m => m.InvestorModule) },
  { path: 'jobs', loadChildren: () => import('./components/jobs/jobs.module').then(m => m.JobsModule) },
  {
    path: '**', // Navigate to Home Page if not found any page
    redirectTo: '/account/login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }