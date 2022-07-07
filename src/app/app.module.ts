import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './components/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { MessagingModule } from './components/messaging/messaging.module';
import { NetworkModule } from './components/network/network.module';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModule } from './components/profile/profile.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { JobsModule } from './components/jobs/jobs.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,JobsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: false,
      enableHtml: true,
      positionClass: 'toast-top-center',
    }),
    HomeModule,
    ProfileModule,
    NetworkModule,
    MessagingModule,
    MatIconModule,
    NgbModule
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}