import * as CryptoJS from 'crypto-js';

import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-lisst.component.html',
  styleUrls: ['./comment-lisst.component.scss']
})
export class CommentLisstComponent implements OnInit {
  @Input() comment: any;
  userId: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.userId = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8)).id;
  }
  selectUser(id) {
    localStorage.setItem("visit", id);
    this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
  }
}
