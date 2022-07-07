import { RouterModule, Routes } from '@angular/router';

import { FollowComponent } from './follow/follow.component';
import { InvitationListComponent } from './invitation-list/invitation-list.component';
import { NetworkComponent } from './network.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: NetworkComponent,
  },
  {
    path: 'list',
    component: InvitationListComponent
  },
  {
    path: 'follow',
    component: FollowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworkRoutingModule { }
