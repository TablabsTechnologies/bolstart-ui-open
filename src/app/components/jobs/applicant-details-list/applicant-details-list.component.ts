import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-details-list',
  templateUrl: './applicant-details-list.component.html',
  styleUrls: ['./applicant-details-list.component.scss']
})
export class ApplicantDetailsListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  opentab(evt, tabname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
