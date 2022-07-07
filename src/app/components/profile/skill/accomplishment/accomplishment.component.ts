import * as $ from 'jquery';
import * as moment from 'moment';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProfileService } from '../../profile.service';
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';

@Component({
  selector: 'accomplishment',
  templateUrl: './accomplishment.component.html',
  styleUrls: ['./accomplishment.component.scss']
})
export class AccomplishmentComponent implements OnInit {
  @Input() userInfo: any;
  public accomplishmentForm: FormGroup;
  monthList: any = common.month;
  dayList: any = common.day;
  stateList: any = common.state;
  industryList: any = common.industries;
  yeaList: any = common.years();
  accomplishmentList: any;
  searchList: any = [];
  showList: number = 0;
  index: number;
  today = moment(new Date()).format('yyyy-MM-DD');

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private profileService: ProfileService
  ) { }
  ngOnInit(): void {
    this.accomplishmentList = this.userInfo.accomplishment != null ? this.userInfo.accomplishment : [];
    this.initializeEduForm();
  }

  initializeEduForm() {
    this.accomplishmentForm = this.fb.group({
      certificationInstitute: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      fromDate: ['', [Validators.required]],
      tillDate: ['', [Validators.required]],
      userId: [''],
      id: ['']
    })
  }


  /* ============ Selected Item ========== */
  selecetedItem(item, index) {
    this.accomplishmentForm.patchValue({
      certificationInstitute: item.certificationInstitute,
      name: item.name,
      description: item.description,
      fromDate: item.fromDate,
      tillDate: item.tillDate,
      userId: item.userId,
      id: item.id
    })
    this.index = index;
  }

  /* =============== Inpuut Focus ============================*/
  eduSubmit() {
    this.accomplishmentForm.markAllAsTouched();
    if (this.accomplishmentForm.valid) {
      let obj = {
        certificationInstitute: this.accomplishmentForm.value.certificationInstitute,
        description: this.accomplishmentForm.value.description,
        fromDate: moment(this.accomplishmentForm.value.fromDate).format('MM-DD-YYYY'),
        id: this.accomplishmentForm.value.id,
        name: this.accomplishmentForm.value.name,
        tillDate: moment(this.accomplishmentForm.value.tillDate).format('MM-DD-YYYY'),
        userId: this.accomplishmentForm.value.userId,
      }
      this.profileService.updateAccomplishments(obj).subscribe(res => {
        if (res.success) {
          this.toastr.success(res.message);
          if (this.index != null || this.index != undefined) {
            this.accomplishmentList.splice(this.index, 1);

            this.accomplishmentList.unshift(res.data)
          } else {
            this.accomplishmentList.unshift(res.data)
          }
          this.accomplishmentForm.reset();
          this.index = null;
          $("#acctModel .close").click();
        } else {
          this.toastr.error(res.message);
        }
      })


    }
  }
  deleteSchool(item, index) {
    this.profileService.deleteAccomplishments(item.id).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message);
        this.accomplishmentList.splice(index, 1);
      }
    })
  }
  newOpen() {
    this.accomplishmentForm.reset();
    this.accomplishmentForm.patchValue({
      userId: this.userInfo.id,
    })
    this.index = null;
  }
}
