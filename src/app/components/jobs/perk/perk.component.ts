import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perk',
  templateUrl: './perk.component.html',
  styleUrls: ['./perk.component.scss']
})
export class PerkComponent implements OnInit {
  arr: any = [
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
    {
      title: 'UI/UX Designer',
      Img: 'assets/Screenshot 2022-03-15 204058.png',
      title2: 'Coursera Hyderabad',
      day: '2',
      applications: '2',
      types: '',
      Jobcategory: 'Job category',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
