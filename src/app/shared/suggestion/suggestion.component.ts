import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { NetworkApiService } from 'src/app/components/network/network-api.service';

@Component({
  selector: 'suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  peopleList: any = [];
  constructor(private router: Router, private networkApiService: NetworkApiService) { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    let userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));
    this.getSuggestFriendList(userInfo.id)
  }

  getSuggestFriendList(userId) {
    this.networkApiService.getPeopleYouKnow(userId).subscribe(res => {
      if (res.success) {
        this.peopleList = res.data.content
      }
    })
  }

  selectUser(id) {
    localStorage.setItem("visit", id);
    this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
  }

}
