import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyMemberComponent } from './company-member/company-member.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyPublishComponent } from './company-publish/company-publish.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', 
    component: CompanyComponent,
    children: [
      {
        path: 'createCompany',
        component: CreateCompanyComponent
      }
    ],

  },
  {
    path: "companyinfo",
    component: CompanyProfileComponent,
    children: [
      {
        path: 'publish',
        component: CompanyPublishComponent
      },
      {
        path: 'detail',
        component: CompanyInfoComponent
      },
      {
        path: 'employee',
        component: CompanyMemberComponent
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
