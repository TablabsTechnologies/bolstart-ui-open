import { NavigationEnd, Router } from '@angular/router';
import { delay, filter, map, withLatestFrom } from 'rxjs/operators';

import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

declare var $: any;
declare var gtag;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bolstart';


  loaders = this.loader.progress$.pipe(
    delay(1000),
    withLatestFrom(this.loader.progress$),
    map(v => v[1]),
  );
  constructor(
    private router: Router,
    private loader: LoadingBarService) {

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-X09FE592NC', {
        'page_path': event.urlAfterRedirects
      });

    })
  }


}
