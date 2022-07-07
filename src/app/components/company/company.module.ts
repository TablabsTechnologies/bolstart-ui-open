import { AddressBookComponent } from './address-book/address-book.component';
import { CommonModule } from '@angular/common';
import { CompanyApiService } from './company-api.service';
import { CompanyComponent } from './company.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyMemberComponent } from './company-member/company-member.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyPublishComponent } from './company-publish/company-publish.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyTopMemberComponent } from './company-top-member/company-top-member.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [CompanyComponent, CreateCompanyComponent, CompanyProfileComponent, CompanyPublishComponent, CompanyInfoComponent, CompanyMemberComponent, CompanyTopMemberComponent, AddressBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    CompanyRoutingModule,
    SharedModule,
    NgxPhotoEditorModule

  ],
  providers: [CompanyApiService],
  exports: [CompanyPublishComponent, CompanyInfoComponent]
})
export class CompanyModule { }
