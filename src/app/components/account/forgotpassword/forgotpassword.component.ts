import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from '../account-api.service';
import { ToastrService } from 'ngx-toastr';

enum showModel {
  isgenerate = 1,
  isVerifiy = 2,
  isReset = 3,
}
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  emailId: any;
  state
  otp: string;
  otpkey: any;
  resetForm: FormGroup;
  fieldTextType: boolean = false;
  isLoading: boolean = false;
  isPwdChange: boolean = false
  constructor(
    private userService: AccountApiService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.state = showModel.isgenerate
    this.resetForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),

    },
    );
    this.getPWDFlag();
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  getPWDFlag() {
    this.route.queryParams.subscribe(param => {
      this.isPwdChange = param.isPasswordChange
    })
  }
  generate() {
    if (this.emailId != null || this.emailId != undefined) {
      let formData = new FormData();
      formData.append('mobileNumber', this.emailId);
      this.isLoading = true;
      this.userService.generateOTP(formData).subscribe(res => {
        this.isLoading = false
        if (res.success) {
          this.state = showModel.isVerifiy;
          this.otpkey = JSON.parse(res.data).Details;
          this.toastr.success(res.message, "Success..!");
        } else {
          this.toastr.error(res.message, "Error..!");
        }
      })
    } else {
      this.toastr.warning("Please Enter emailId", 'Warning..!');
    }
  }
  backToGenerate() {
    this.state = showModel.isgenerate;

  }
  goToReset() {
    if (this.otp != null || this.otp != undefined) {
      let formData = new FormData();
      formData.append('mobileNumber', this.emailId);
      formData.append('otp', this.otp);
      this.isLoading = true;
      this.userService.verifyOTP(formData).subscribe(res => {
        this.isLoading = false;
        if (res.success) {
          this.state = showModel.isReset;
          this.toastr.success(res.message, "Success..!");
        } else {
          this.toastr.error(res.message, "Error..!");
        }
      })
    }

  }

  resetPassword() {
    if (this.resetForm.valid) {
      if (this.resetForm.value.newPassword == this.resetForm.value.confirmPassword) {
        let formData = new FormData();
        formData.append('mobileNumber', this.emailId);
        formData.append('password', this.resetForm.value.newPassword);
        this.isLoading = true;
        this.userService.resetPassword(formData).subscribe(res => {
          this.isLoading = false;
          if (res.success) {
            this.toastr.success(res.message, "Success..!");
            this.router.navigate(['/account/login']);
          } else {
            this.toastr.error(res.message, "Error..!");
          }
        })

      } else {
        this.toastr.warning("New Password and Confirm Password does not match", 'Warning..!');
      }
    }
  }

}
