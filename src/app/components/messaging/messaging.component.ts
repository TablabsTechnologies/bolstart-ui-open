import { Component, OnInit } from '@angular/core';

import { COMETCHAT_CONSTANTS } from 'src/CONSTS';
import { CometChat } from "@cometchat-pro/chat";
import { Router } from "@angular/router";

// global var declaration
declare var window: any;

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  userInput: String = "";
  superHero1 = "https://data-us.cometchat.io/assets/images/avatars/ironman.png";
  superHero2 =
    "https://data-us.cometchat.io/assets/images/avatars/captainamerica.png";
  superHero3 =
    "https://data-us.cometchat.io/assets/images/avatars/spiderman.png";
  superHero4 =
    "https://data-us.cometchat.io/assets/images/avatars/wolverine.png";
  superHero5 = "https://data-us.cometchat.io/assets/images/avatars/cyclops.png";

  constructor(private router: Router) { }

  onLoginError: boolean = false;
  errorMsg: string = "";

  ngOnInit() {

  }

  /**
   * Get User info by using the UID for logging a user in
   * @param {String} UID
   */
  onLogin() {
    CometChat.login('superhero1', COMETCHAT_CONSTANTS.AUTH_KEY).then(
      (user) => {
        // this.router.navigate(["/messaging/Home"]);
      },
      (error) => {
        this.onLoginError = true;
        this.errorMsg = error.message;
      }
    );
  }
}