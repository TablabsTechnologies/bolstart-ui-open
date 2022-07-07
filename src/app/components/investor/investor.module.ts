import { CommonModule } from '@angular/common';
import { CompanyModule } from '../company/company.module';
import { InvCompDetailComponent } from './inv-comp-detail/inv-comp-detail.component';
import { InvestorComponent } from './investor.component';
import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorService } from './investor.service';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [InvestorComponent, InvCompDetailComponent],
  imports: [
    CommonModule,
    InvestorRoutingModule,
    SharedModule,
    CompanyModule


  ],
  providers: [
    InvestorService
  ]
})
export class InvestorModule { }
