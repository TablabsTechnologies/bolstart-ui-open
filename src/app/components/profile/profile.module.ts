import { AboutComponent } from './about/about.component';
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { AccomplishmentComponent } from './skill/accomplishment/accomplishment.component';
import { AccountApiService } from '../account/account-api.service';
import { ActivityComponent } from './activity/activity.component';
import { AwsService } from 'src/app/shared/AWS-Service/aws.service';
import { CommonModule } from '@angular/common';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { EducationComponent } from './about/education/education.component';
import { ExperianceComponent } from './about/experiance/experiance.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { HomeService } from '../home/service/home.service';
import { NgModule } from '@angular/core';
import { NgxPhotoEditorModule } from "ngx-photo-editor";
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './profile.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkillComponent } from './skill/skill.component';
import { SkillDetailComponent } from './skill/skill-detail/skill-detail.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelinePublishComponent } from './timeline-publish/timeline-publish.component';
import { TimlinePostComponent } from './timline-post/timline-post.component';

@NgModule({
  declarations: [ConnectionListComponent, ProfileComponent, TimelineComponent, ActivityComponent, ExperianceComponent, EducationComponent, AboutComponent, TimlinePostComponent, AboutInfoComponent, SkillComponent, SkillDetailComponent, AccomplishmentComponent, TimelinePublishComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    NgxPhotoEditorModule
  ],
  providers: [
    ProfileService,
    HomeService,
    AwsService,
    AccountApiService
  ]
})
export class ProfileModule { }
