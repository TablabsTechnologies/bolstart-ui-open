import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AwsService } from './AWS-Service/aws.service';
import { ChartsModule } from 'ng2-charts';
import { CommentLisstComponent } from './comment-lisst/comment-lisst.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './common/filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LightboxModule } from 'ngx-lightbox';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { PostContainerComponent } from './post-container/post-container.component';
import { ProfileService } from './../components/profile/profile.service';
import { PublishContainerComponent } from './publish-container/publish-container.component';
import { ReadMoreComponent } from './readmore/readMore.component';
import { RouterModule } from '@angular/router';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { postService } from './post-container/post-container.service';
import { FilterSearchComponent } from './popup/filter-search/filter-search.component';
import { JobPostCancelComponent } from './popup/job-post-cancel/job-post-cancel.component';

@NgModule({
  declarations: [
    FilterPipe,
    HeaderComponent, FooterComponent, SuggestionComponent, AdvertisementComponent, PostContainerComponent, CommentLisstComponent, ReadMoreComponent, FilterPipe, PublishContainerComponent, LineGraphComponent, FilterSearchComponent, JobPostCancelComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    PickerModule,
    ChartsModule,
    LightboxModule


  ],
  providers: [ProfileService, AwsService, postService],
  exports: [HeaderComponent, FormsModule, NgxPaginationModule, InfiniteScrollModule, FilterPipe, LineGraphComponent,
    ReactiveFormsModule, SuggestionComponent, AdvertisementComponent, PostContainerComponent, PublishContainerComponent, ReadMoreComponent]
})
export class SharedModule { }
