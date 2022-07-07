import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { ExperianceComponent } from './about/experiance/experiance.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { SkillComponent } from './skill/skill.component';
import { TimelinePublishComponent } from './timeline-publish/timeline-publish.component';
import { TimlinePostComponent } from './timline-post/timline-post.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: "timeline",
        component: TimlinePostComponent
      },
      {
        path: "publish",
        component: TimelinePublishComponent
      },
      {
        path: "skill",
        component: SkillComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "connections",
        component: ConnectionListComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
