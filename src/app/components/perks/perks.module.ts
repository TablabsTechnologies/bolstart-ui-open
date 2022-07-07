import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PerksComponent } from './perks.component';
import { PerksRoutingModule } from './perks-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [PerksComponent],
  imports: [
    CommonModule,
    PerksRoutingModule,
    SharedModule
  ]
})
export class PerksModule { }
