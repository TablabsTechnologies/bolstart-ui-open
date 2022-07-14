import * as CryptoJS from 'crypto-js';

import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountApiService } from '../account-api.service';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { ToastrService } from 'ngx-toastr';
import { common } from 'src/app/shared/common/validator';

declare var window: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public newUserFrom: FormGroup;
  public loginFrom: FormGroup;
  isLoading: boolean;
  fieldTextType;
  link: any;
  toggle: number = 2;
  termsLink = "https://bolstartimages.s3.ap-south-1.amazonaws.com/Terms+of+Use_Bolstart_End+Users_15122020.pdf"
  constructor(private fb: FormBuilder, private apiService: AccountApiService,
    private toastr: ToastrService, public router: Router, private authService: SocialAuthService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.register();
    this.loginUser();
    this.link = location.href.slice(0, - 5) + "profile-new?userId="

  }
  switch(number) {
    this.toggle = number;
    this.newUserFrom.reset();
    this.loginFrom.reset();
    this.newUserFrom.patchValue({
      countryCode: "+91"
    })
    if (this.toggle == 2) {
      document.documentElement.scrollTop = 12;

    }
  }

  register() {
    this.newUserFrom = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.pattern(common.onlyAlphabetRegex)]],
      mobileNumber: ['', [Validators.required]],
      lastName: ['', [Validators.required, Validators.pattern(common.onlyAlphabetRegex)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      policy: ['', [Validators.required]],
      countryCode: ['+91', [Validators.required]]
    })
  }

  loginUser() {
    this.loginFrom = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }


  /* ========================= Registartion Module =================================== */
  onRegister() {
    this.newUserFrom.markAllAsTouched();
    if (this.newUserFrom.value.password == this.newUserFrom.value.confirmPassword) {
      if (this.newUserFrom.value.policy == true) {
        if (this.newUserFrom.valid) {
          let obj = {
            emailId: this.newUserFrom.value.emailId,
            firstName: this.newUserFrom.value.firstName,
            lastName: this.newUserFrom.value.lastName,
            mobileNumber: this.newUserFrom.value.mobileNumber,
            password: this.newUserFrom.value.password,
            isEmailVerified: "false"
          }
          this.isLoading = true;
          this.apiService.register(obj).subscribe(res => {
            this.isLoading = false;
            if (res.success) {
              this.toggle = 2
              this.sendEmail(res.data);
            } else {
              this.toastr.warning(res.message);
            }
          })
        }
      } else {
        this.toastr.error("Please accept Bolstart Policies")
      }
    } else {
      this.toastr.error("Password and Confirm Password dosen't match.")
    }

  }

  sendEmail(obj) {
    var formData = new FormData();
    formData.append('toemailId', this.newUserFrom.value.emailId);
    formData.append('subject', 'Bolstart account verification');
    formData.append('message', `${this.link + obj.id}`);
    this.apiService.sendEmail(formData).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message);
      } else {
        this.toastr.warning(res.message);
      }
    })

  }

  /* ========================================================== */
  /* ========================= Login Module =================================== */
  onLogin() {
    let formData = new FormData;
    formData.append("password", this.loginFrom.value.password);
    formData.append("os", "web");
    formData.append("deviceId", "89ABCDEF-01234567-89ABCDEF");
    var email_pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    var mobile_pattern = /^[0-9]/;
    if (email_pattern.test(this.loginFrom.value.username)) {
      formData.append("emailId", this.loginFrom.value.username);
      this.isLoading = true;
      this.apiService.authLoginUsingEmail(formData).subscribe(res => {
        
        this.isLoading = false;
        if (res.data != null) {
          if (res.data.isEmailVerified == 'true') {
            let encrypt = CryptoJS.AES.encrypt(JSON.stringify(res.data), "Bollstart").toString();
            localStorage.setItem('member', res.data.id);
            localStorage.setItem("company_id", res.data.company_id)
            localStorage.setItem('Bolstart', encrypt);
            this.router.navigate(['/home']);
          } else {
            this.toastr.error("Please Verify Account")
          }
        } else {
          this.toastr.error(res.message);
        }
      })
    } else if (mobile_pattern.test(this.loginFrom.value.username)) {
      formData.append("mobileNumber", this.loginFrom.value.username);
      this.isLoading = true;
      this.apiService.authLoginUsingMobile(formData).subscribe(res => {
        this.isLoading = false;
        if (res.data != null) {
          if (res.data.isEmailVerified == 'true') {

            let encrypt = CryptoJS.AES.encrypt(JSON.stringify(res.data), "Bollstart").toString();
            localStorage.setItem('member', res.data.id);
            localStorage.setItem('Bolstart', encrypt);
            this.router.navigate(['./home'])
          } else {
            this.toastr.error("Please Verify Account")
          }
        } else {
          this.toastr.error(res.message);

        }
      })
    } else {

      this.toastr.warning('Enter Valid Credentials')
    }
  }
  /* ========================================================== */
  /* ========================= Social login =================================== */

  gmailSignUp() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      let obj = {
        emailId: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        isGoogleLogged: "true"
      }
      this.isLoading = true;
      this.apiService.register(obj).subscribe(res => {
        this.isLoading = false;
        if (res.success) {
          this.isLoading = false;
          if (res.success) {
            this.toggle = 2
            this.sendEmail(res.data);
          } else {
            this.toastr.warning(res.message);
          }
        }
      })
    })
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  scrollTop() {
    document.documentElement.scrollTop = 0;
    this.toggle = 1;
  }
}
