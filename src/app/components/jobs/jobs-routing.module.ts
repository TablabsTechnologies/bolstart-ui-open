import { RouterModule, Routes } from '@angular/router';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobsComponent } from './jobs.component';
import { NgModule } from '@angular/core';
import { GetJobDetailsFormComponent } from './get-job-details-form/get-job-details-form.component';
import { JobPostUIComponent } from './job-post-ui/job-post-ui.component';
import { JobListUiComponent } from './job-list-ui/job-list-ui.component';
import { JobPostFormComponent } from './job-post-form/job-post-form.component';
import { UpdateDocUiComponent } from './update-doc-ui/update-doc-ui.component';
import { Popup6Component } from './popups/popup6/popup6.component';
import { Popup8Component } from './popups/popup8/popup8.component';
import { Popup11Component } from './popups/popup11/popup11.component';
import { Popup12Component } from './popups/popup12/popup12.component';
import { Popup13Component } from './popups/popup13/popup13.component';
import { Popup14Component } from './popups/popup14/popup14.component';
import { Popup21Component } from './popups/popup21/popup21.component';
import { Popup22Component } from './popups/popup22/popup22.component';
import { PerkComponent } from './perk/perk.component';
import { InternsComponent } from './popups/interns/interns.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { JobApplyBottomSheetComponent } from './job-apply-bottom-sheet/job-apply-bottom-sheet.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { QuickapplyPopupComponent } from './quickapply-popup/quickapply-popup.component';
import { Popup30Component } from './popups/popup30/popup30.component';
import { ApplicantDetailsListComponent } from './applicant-details-list/applicant-details-list.component';
const routes: Routes = [{
  path: '', component: JobsComponent, children: [
    { path: "job-list", component: JobListComponent },
    { path: "job-list-ui", component: JobListUiComponent },
    { path: "job-post-ui", component: JobPostUIComponent },
    { path: "job-post-cancel-popup", component: Popup6Component },
    { path: "job-post-form", component: JobPostFormComponent },
    { path: "job-list-details", component: JobApplyBottomSheetComponent },
    { path: "quick-apply-popup", component: QuickapplyPopupComponent },
    { path: "PerkComponent", component: PerkComponent },
    { path: "job-details-form", component: GetJobDetailsFormComponent },
    { path: "job-post", component: JobPostComponent },
    { path: "job-apply", component: JobApplyComponent },
    { path: "Popup8Component", component: Popup8Component },
    { path: "Popup11Component", component: Popup11Component },
    { path: "Popup12component", component: Popup12Component },
    { path: "Popup13Component", component: Popup13Component },
    { path: "Popup14Component", component: Popup14Component },
    { path: "Popup21Component", component: Popup21Component },
    { path: "Popup22Component", component: Popup22Component },
    { path: "InternsComponent", component: InternsComponent },
    { path: "popup30Component", component: Popup30Component },
    { path:"ApplicationDetails",component: ApplicantDetailsListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
export const routingComponents = [JobsComponent, JobPostComponent, JobApplyComponent, JobListComponent, GetJobDetailsFormComponent, UploadDocumentComponent, JobPostUIComponent, JobApplyBottomSheetComponent, JobListUiComponent, JobPostFormComponent, Popup13Component, Popup6Component, Popup8Component, Popup11Component, Popup14Component, Popup21Component, Popup22Component, UpdateDocUiComponent, ProfileInfoComponent, PerkComponent, InternsComponent, Popup12Component]
