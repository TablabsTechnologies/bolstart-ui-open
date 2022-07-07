import * as CryptoJS from 'crypto-js';

import { AfterViewInit, Component, OnInit } from '@angular/core';

import { COMETCHAT_CONSTANTS } from 'src/CONSTS';
import { CometChat } from "@cometchat-pro/chat";

declare var $: any;

// global var declaration
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  add: any = "assets/img/Add1.png";
  userInfo: any;
  constructor() { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));

  }


  ngAfterViewInit() {
    this.onCometLogin();
    setTimeout(() => { window.cometChat(this.userInfo.uid) }, 2000);
  }
  onCometLogin() {
    CometChat.login(this.userInfo.uid, COMETCHAT_CONSTANTS.AUTH_KEY).then(
      (user) => {


      },
      (error) => {

      }
    );
  }

  close() {
    $("#tourModel iframe").attr("src", $("#tourModel iframe").attr("src"));
  }
}
