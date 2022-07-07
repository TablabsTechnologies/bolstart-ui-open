import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerksComponent } from './perks.component';

const routes: Routes = [{ path: '', component: PerksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerksRoutingModule { }
