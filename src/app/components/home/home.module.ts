import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { JobsModule } from './../jobs/jobs.module';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NgModule } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { PostPanelComponent } from './post-panel/post-panel.component';
import { ProfileService } from '../profile/profile.service';
import { SharedModule } from '../../shared/shared.module';
import { WritePostComponent } from './post-panel/write-post/write-post.component';

@NgModule({
  declarations: [HomeComponent, LeftPanelComponent, PostPanelComponent, WritePostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PickerModule
  ],
  providers: [ProfileService]
})
export class HomeModule { }
