import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkRoutingModule } from './network-routing.module';
import { NetworkComponent } from './network.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageNetworkComponent } from './manage-network/manage-network.component';
import { InvitationComponent } from './invitation/invitation.component';
import { KnowPeopleComponent } from './know-people/know-people.component';
import { NetworkApiService } from './network-api.service';
import { InvitationListComponent } from './invitation-list/invitation-list.component';
import { FollowComponent } from './follow/follow.component';


@NgModule({
  declarations: [NetworkComponent, ManageNetworkComponent, InvitationComponent, KnowPeopleComponent, InvitationListComponent, FollowComponent],
  imports: [
    CommonModule,
    NetworkRoutingModule,
    SharedModule,
  ],
  providers: [NetworkApiService]
})
export class NetworkModule { }
