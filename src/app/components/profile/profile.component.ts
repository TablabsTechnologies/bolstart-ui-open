import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  add: any = "assets/img/Add3.png"
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
