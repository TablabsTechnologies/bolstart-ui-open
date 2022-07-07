import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobsRoutingModule, routingComponents} from './jobs-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {  MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { QuickapplyPopupComponent } from './quickapply-popup/quickapply-popup.component';
import { JobsListDetailsComponent } from './jobs-list-details/jobs-list-details.component';
import { PublishNewJobPostComponent } from './publish-new-job-post/publish-new-job-post.component';
import { Popup30Component } from './popups/popup30/popup30.component';
import { ApplicantDetailsListComponent } from './applicant-details-list/applicant-details-list.component'; 
import { RazorpayComponent } from './razorpay/razorpay.component';

@NgModule({
  declarations: [JobsComponent, routingComponents, QuickapplyPopupComponent, JobsListDetailsComponent, PublishNewJobPostComponent, Popup30Component,
  ApplicantDetailsListComponent,
  RazorpayComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBottomSheetModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }]
})
export class JobsModule { }
