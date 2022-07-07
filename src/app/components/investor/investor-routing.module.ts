import { RouterModule, Routes } from '@angular/router';

import { CompanyInfoComponent } from '../company/company-info/company-info.component';
import { CompanyPublishComponent } from '../company/company-publish/company-publish.component';
import { InvCompDetailComponent } from './inv-comp-detail/inv-comp-detail.component';
import { InvestorComponent } from './investor.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '', component: InvestorComponent,
  children: [
    {
      path: 'companyDetail',
      component: InvCompDetailComponent,
      children: [
        {
          path: 'publish',
          component: CompanyPublishComponent
        },
        {
          path: 'detail',
          component: CompanyInfoComponent
        },
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
