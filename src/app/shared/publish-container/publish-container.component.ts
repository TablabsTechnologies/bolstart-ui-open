import * as CryptoJS from 'crypto-js';
import * as moment from 'moment';

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

import { AwsService } from '../AWS-Service/aws.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PublishContainerService } from './publish-container.service';
import { Router } from '@angular/router';
import { postService } from '../post-container/post-container.service';

@Component({
  selector: 'publish-container',
  templateUrl: './publish-container.component.html',
  styleUrls: ['./publish-container.component.scss']
})
export class PublishContainerComponent implements OnInit {
  @ViewChild("imagePicker", { static: false }) imagePicker: ElementRef;
  @ViewChild("openModel", { static: false }) openModel: ElementRef;

  @Input() publish: any;
  @Input() userInfo: any;
  comment: any = "";
  commentList: any = [];
  isShowComment: boolean = false;
  isLoader: boolean = false;
  accountHolder: any;
  currentPage: number = 0;
  throttle = 150;
  scrollDistance = 1;
  scrollUpDistance = 1.5;
  emojiToggled: boolean = false;
  postEmojiToggled: boolean = false;
  selectedFiles: FileList;
  postImage: any = null;
  description: string = null;

  constructor(private modalService: NgbModal, private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox, private publishService: PublishContainerService, private apiService: postService, private router: Router, private awsService: AwsService,) { }

  ngOnInit(): void {
    let encrypt = localStorage.getItem('Bolstart');
    this.accountHolder = JSON.parse(CryptoJS.AES.decrypt(encrypt, "Bollstart").toString(CryptoJS.enc.Utf8));

  }

  getPost(post, content) {
    // $('#editModel').removeData();
    // this.postImage = post.image;
    // this.description = post.description;
    // this.openModel.nativeElement.click();
    this.postImage = post.image;
    this.description = post.description
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })

  }

  open(image): void {
    // open lightbox
    let albumList = [];
    const album = {
      src: image,
      caption: "image",
      thumb: image
    };
    albumList.push(album)

    this._lightbox.open(albumList, 0, { wrapAround: true, showImageNumberLabel: false, centerVertically: true });
  }
  openGraph(image): void {
    // open lightbox
    let albumList = [];
    const album = {
      src: image.chartUrl,
      caption: "image",
      thumb: image.chartUrl
    };
    albumList.push(album)

    this._lightbox.open(albumList, 0, { wrapAround: true, showImageNumberLabel: false, centerVertically: true });
  }

  /* ==================  like and Dislike Post ====================== */
  likePost() {
    let obj = {
      isLiked: 'true',
      publishId: this.publish.id,
      userId: this.accountHolder.id
    }
    this.publishService.addLikeOrDislikeToPublish(obj).subscribe(res => {
      if (res.success) {
        this.publish.isDislikedByUser = res.data.isDisliked;
        this.publish.isLikedByUser = res.data.isLiked;
        this.publish.noOfDislikes = res.data.noOfDislikes
        this.publish.noOfLikes = res.data.noOflikes
      }
    })
  }
  dislikePost() {
    let obj = {
      isDisliked: 'true',
      publishId: this.publish.id,
      userId: this.accountHolder.id

    }
    this.publishService.addLikeOrDislikeToPublish(obj).subscribe(res => {
      if (res.success) {
        this.publish.isDislikedByUser = res.data.isDisliked;
        this.publish.isLikedByUser = res.data.isLiked;
        this.publish.noOfDislikes = res.data.noOfDislikes
        this.publish.noOfLikes = res.data.noOflikes
      }
    })
  }

  /* ========================  Comment Section   ======================================= */

  addComment() {
    if (this.comment != "") {
      let obj = {
        description: this.comment,
        publishId: this.publish.id,
        userId: this.accountHolder.id
      }
      this.publishService.addCommentOnPublish(obj).subscribe(res => {
        if (res.success) {
          this.comment = ""
          if (this.publish.commentsOnPublishtList.length < 2) {
            this.publish.commentsOnPublishtList.push(res.data)
          } else {
            this.commentList.push(res.data)
          }
        }
      })
    }

  }

  getAllCommentsByPublishId(postId, pageNo) {
    this.isLoader = true;
    this.publishService.getCommentListByPublish(this.userInfo.id, postId, pageNo).subscribe(res => {
      this.isLoader = false;
      if (res.success) {
        this.commentList = res.data.content;
        this.isShowComment = true;
      }
    })
  }
  hideAllComment() {
    this.isShowComment = false;
    this.commentList = [];
  }

  /* ======================  infinite Scroll  =========================== */
  onScrollDown() {
    this.currentPage += 1;
    this.getAllCommentsByPublishId(this.publish.id, this.currentPage)
  }
  /* ============================      ============================================ */

  selectUser(id) {
    localStorage.setItem("visit", id);
    this.router.navigate(['../profile/timeline'], { queryParams: { visit: id } });
  }

  /* ================  Delete Post  ========================*/
  deletePost(postId) {
    this.apiService.deletePost(postId).subscribe(res => {
      if (res.success) {
        this.apiService.emitDeleteEvent(postId)
      }
    })
  }

  /* ================  update post  ========================*/

  getImage() {
    try {
      this.imagePicker.nativeElement.click();
    } catch (error) {
    }
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

  removeImage() {
    this.selectedFiles = null;
    this.postImage = '';
  }
  updatePostAdd() {
    debugger;
    if (this.selectedFiles == null || this.postImage == '') {
      const obj = {    /* Request payload of add post */
        description: this.description,
        image: this.postImage,
        userId: this.userInfo.id,
        id: this.publish.id,
      }
      this.apiService.updatePost(obj).subscribe(response => {
        if (response.success) {
          this.apiService.emitUpdateEvent(response.data);
          this.modalService.dismissAll();
        }
      })
    } else {
      this.onPostImageUpload();
    }
  }

  onPostImageUpload() {
    const file = this.selectedFiles.item(0);
    this.awsService.uploadFile(file, "postimage").then(res => {
      let obj = {
        description: this.description,
        image: res,
        userId: this.userInfo.id,
        id: this.publish.id,
      }
      this.apiService.updatePost(obj).subscribe(response => {
        if (response.success) {
          this.apiService.emitUpdateEvent(response.data);
          this.modalService.dismissAll();
        }
      })
    })
  }
  close() {
    this.modalService.dismissAll();
  }


  toggleEmoji(value) {
    switch (value) {
      case 1:
        this.postEmojiToggled = !this.postEmojiToggled;
        break;

      case 2:
        this.emojiToggled = !this.emojiToggled;
        break;
    }
  }

  addEmoji(event) {
    let emoji = event.emoji.native;
    this.comment = this.comment + emoji;
    this.toggleEmoji(2)
  }

  addEmojiOnPost(event) {
    let emoji = event.emoji.native;
    this.description = this.description + emoji;
    this.toggleEmoji(1)
  }
  onChangeDateFormat(oldDate) {
    let day = oldDate.substring(0, 2);
    let month = moment.monthsShort(oldDate.substring(3, 5) - 1);
    let year = oldDate.substring(6, 10);
    return `${day}-${month}-${year}`
  }
}
