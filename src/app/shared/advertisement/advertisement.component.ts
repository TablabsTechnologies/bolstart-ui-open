import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})

export class AdvertisementComponent implements OnInit {
  @Input() image: any;

  constructor() { }

  ngOnInit(): void {
  }

}
