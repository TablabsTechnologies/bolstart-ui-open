import * as CryptoJS from 'crypto-js';

import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { AwsService } from 'src/app/shared/AWS-Service/aws.service';
import { CompanyApiService } from 'src/app/components/company/company-api.service';
import { HomeService } from './../../service/home.service';
import { ProfileService } from 'src/app/components/profile/profile.service';

declare var $: any;

@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss']
})
export class WritePostComponent implements OnInit {
  @ViewChild("imagePicker", { static: false }) imagePicker: ElementRef;
  selectedFiles: FileList = null;
  postImage: any = null;
  type: number = 1;
  description: string = "";
  userInfo: any;
  friendList: any = [];
  selectedFriendList: any = [];
  isShow: boolean = false;
  emojiToggled: boolean = false;
  searchKeyWord: string;
  groupList: any = [];
  companyDetail: any;
  selectedGroupId: any = "";
  entity: number;
  graphType: string = "";
  selectionTab: number = 1;
  graphImage: any;
  graphList: any = [];
  isLoading: boolean = false;
  caretPos: number = 0;

  constructor(private awsService: AwsService, private companyService: CompanyApiService, private apiService: HomeService, private profileService: ProfileService) { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.userInfo = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));
    this.getUserInfo();
    this.getFriendList(this.userInfo.id)
  }
  getUserInfo() {
    this.profileService.getUserInfo(this.userInfo.id, this.userInfo.id).subscribe(res => {
      if (res.success) {
        this.userInfo = res.data;
      }
    })
  }
  selectType(number) {
    this.type = number;
  }

  onSelectionTab(tab) {
    if (tab == 1) {
      this.selectionTab = 1;
      if (this.postImage == null) {
        this.getImage();
      }
    } else {
      this.selectionTab = 2;
    }
  }

  getImage() {
    try {
      this.imagePicker.nativeElement.click();
    } catch (error) {
    }
  }
  onOpenModel() {
    switch (this.type) {
      case 1:
        this.removeImage(1);
        $('#myModal').modal('show');
        break;
      case 2:
        $('#poleModel').modal('show');
        if (this.userInfo.company_id != null) {
          this.getAddresssBookByComId();
          this.getCompanyDetail();
        }
        break;
      case 3:
        this.removeImage(1);
        $('#questionModel').modal('show');
        break;
    }
    this.description = "";
    this.postImage = null;
    this.graphImage = null;
    this.graphList = [];
    this.entity = null;
    this.graphType = ""
  }
  changeListener($event) {
    this.selectedFiles = $event.target.files;
    const file = this.selectedFiles.item(0);
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (_event) => {
      this.postImage = reader.result
    }
  }

  removeImage(type) {
    if (type == 1) {
      this.selectedFiles = null;
      this.postImage = null;
    } else {
      this.graphImage = null;
    }
  }

  /* ====== get Friend List ========== */

  getFriendList(userId) {
    this.apiService.getFriendList(userId).subscribe(res => {
      if (res.success) {
        this.friendList = res.data.content;
      }
    })
  }

  /* ================== SEARCH FRIEND LIST  ======================== */
  onSearchFriend(value) {
    if (value != "") {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  onSelectFriendFromList(item) {
    this.selectedFriendList.push(item)
    if (this.selectedFriendList.length < 1) {
      this.selectedFriendList.push(item)

    } else {
      if (this.selectedFriendList.indexOf(item) == -1) {
        this.selectedFriendList.push(item)
      }
    }
    this.isShow = false;
  }
  removeFriend(index) {
    this.selectedFriendList.splice(index, 1);
  }
  /*====================== Add Post Api call For Description with Image ================*/
  onPostImageUpload() {
    const file = this.selectedFiles.item(0);
    this.awsService.uploadFile(file, "postimage").then(res => {
      let obj = {
        description: this.urlify(this.description),
        image: res,
        userId: this.userInfo.id,

      }
      this.apiService.addNewPost(obj).subscribe(response => {
        if (response.success) {
          this.apiService.emitEvent();
          $("#myModal .close").click();
          this.isLoading = false;
        }
      })
    })
  }
  onPublishImageUpload(companyId) {
    const file = this.selectedFiles.item(0);
    this.awsService.uploadFile(file, "postimage").then(res => {
      let obj = {
        description: this.urlify(this.description),
        image: res,
        userId: this.userInfo.id,
        companyId: companyId,
        groupId: this.selectedGroupId,
        chartUrls: this.graphList
      }

      this.apiService.addNewPublish(obj).subscribe(response => {
        if (response.success) {
          this.apiService.emitEvent();
          $("#poleModel .close").click();
          $("#accountModel .close").click();
          this.isLoading = false;
        }
      })
    })
  }
  /* ================= Graph  ======================= */
  onAddRecordGraph() {
    if (this.graphType != "" && this.entity != null) {
      let obj = {
        companyId: this.companyDetail.id,
        userId: this.userInfo.id,
        datasets: [{ data: [`${this.entity}`], label: this.graphType }],
      }
      this.apiService.createChart(obj).subscribe(res => {
        if (res.success) {
          this.graphImage = res.data[0];
          this.createGraphList(this.graphImage);
        }
      })
    }

  }

  createGraphList(image) {
    if (this.graphList.length > 0) {
      let index = this.graphList.findIndex(res => res.chartName == image.chartName);
      if (index !== -1) {
        return this.graphList[index].chartUrl = image.chartUrl;
      } else {
        this.graphList.push(image)
      }
    } else {
      this.graphList.push(image);
    }

  }
  removeGraph(item) {
    this.graphList = this.graphList.filter(res => res.chartName != item.chartName)
  }
  /*=================Add Post Api call only For Description ==============*/
  onNewPostAdd() {
    if (this.selectedFiles == null && this.description.length > 0) {
      this.isLoading = true;
      const obj = {    /* Request payload of add post */
        description: this.urlify(this.description),
        userId: this.userInfo.id
      }
      this.apiService.addNewPost(obj).subscribe(res => {
        if (res.success) {
          this.apiService.emitEvent();
          $("#myModal .close").click();
          this.isLoading = false;
        }
      })
    } else if (this.selectedFiles != null) {
      this.isLoading == null
      this.onPostImageUpload();
    }
  }
  /* =============================================== */
  onNewPublishAdd(companyId?) {
    this.isLoading = true;
    if (this.selectedFiles == null) {
      const obj = {    /* Request payload of add post */
        description: this.urlify(this.description),
        userId: this.userInfo.id,
        companyId: companyId,
        groupId: this.selectedGroupId,
        image: this.postImage,
        chartUrls: this.graphList,

      }
      this.apiService.addNewPublish(obj).subscribe(res => {
        if (res.success) {
          this.apiService.emitEvent();
          $("#poleModel .close").click();
          $("#accountModel .close").click();
          this.isLoading = false;
        }
      })
    } else {
      this.onPublishImageUpload(companyId);
    }
  }

  /* ================= */
  hide() {
    if (this.emojiToggled) {
      this.emojiToggled = false;
    }
  }
  toggleEmoji() {
    this.emojiToggled = !this.emojiToggled;
  }
  addEmoji(event) {
    let emoji = event.emoji.native;
    this.description = [this.description.slice(0, this.caretPos), emoji, this.description.slice(this.caretPos)].join('');
    this.toggleEmoji()
  }
  getCaretPos(oField) {
    if (oField.selectionStart || oField.selectionStart == '0') {
      this.caretPos = oField.selectionStart;
    }
  }
  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    let url = text.replace(urlRegex, (url) => {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    })
    return url;
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }
  /* ============= Get AddressBook List ==================*/
  getCompanyDetail() {
    this.profileService.getCompanyInfo(this.userInfo.id).subscribe(res => {
      if (res.success) {
        this.companyDetail = res.data[0]
      }
    })
  }

  getAddresssBookByComId() {
    this.companyService.getAddressBookByCompanyId(this.userInfo.company_id).subscribe(res => {
      if (res.success) {
        this.groupList = res.data.filter(res => res.emailId.length > 0)
      }
    })
  }


}