import * as CryptoJS from 'crypto-js';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manage-network',
  templateUrl: './manage-network.component.html',
  styleUrls: ['./manage-network.component.scss']
})
export class ManageNetworkComponent implements OnInit {
  @Input() followersCount: any;
  @Input() networkCount: any;
  userId
  constructor() { }

  ngOnInit(): void {
    this.userId = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('Bolstart'), "Bollstart").toString(CryptoJS.enc.Utf8)).id;
  }



}
