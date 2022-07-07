import * as CryptoJS from 'crypto-js';

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

import { AwsService } from '../AWS-Service/aws.service';
import { CommentLisstComponent } from './../comment-lisst/comment-lisst.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { postService } from './post-container.service';

declare var $: any;
@Component({
  selector: 'post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {
  @ViewChild("imagePicker", { static: false }) imagePicker: ElementRef;
  @ViewChild("openModel", { static: false }) openModel: ElementRef;

  @Input() post: any;
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
  caretPos: number = 0;

  constructor(private modalService: NgbModal, private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox, private apiService: postService, private router: Router, private awsService: AwsService,) { }

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


  /* ==================  like and Dislike Post ====================== */
  likePost() {
    let obj = {
      isLiked: 'true',
      postId: this.post.id,
      userId: this.accountHolder.id
    }
    this.apiService.addLikeOrDislikeToPost(obj).subscribe(res => {
      if (res.success) {
        this.post.isDislikedByUser = res.data.isDisliked;
        this.post.isLikedByUser = res.data.isLiked;
        this.post.noOfDislikes = res.data.noOfDislikes
        this.post.noOfLikes = res.data.noOflikes
      }
    })
  }
  dislikePost() {
    let obj = {
      isDisliked: 'true',
      postId: this.post.id,
      userId: this.accountHolder.id
    }
    this.apiService.addLikeOrDislikeToPost(obj).subscribe(res => {
      if (res.success) {
        this.post.isDislikedByUser = res.data.isDisliked;
        this.post.isLikedByUser = res.data.isLiked;
        this.post.noOfDislikes = res.data.noOfDislikes
        this.post.noOfLikes = res.data.noOflikes
      }
    })
  }

  /* ========================  Comment Section   ======================================= */

  addComment() {
    if (this.comment != "") {
      let obj = {
        description: this.comment,
        postId: this.post.id,
        userId: this.accountHolder.id
      }
      this.apiService.addCommentOnPost(obj).subscribe(res => {
        if (res.success) {
          this.comment = ""
          if (this.post.commentsOnPostList.length < 2) {
            this.post.commentsOnPostList.push(res.data)
          } else {
            this.commentList.push(res.data)
          }
        }
      })
    }

  }

  getAllCommentsByPostId(postId, pageNo) {
    this.isLoader = true;
    this.apiService.getCommentListByPost(this.userInfo.id, postId, pageNo).subscribe(res => {
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
    this.getAllCommentsByPostId(this.post.id, this.currentPage)
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
  hide() {
    if (this.emojiToggled) {
      this.emojiToggled = false;
    }
  }
  updatePostAdd() {
    if (this.selectedFiles == null || this.postImage == '') {
      const obj = {    /* Request payload of add post */
        description: this.urlify(this.description),
        image: this.postImage,
        userId: this.userInfo.id,
        id: this.post.id,
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
        description: this.urlify(this.description),
        image: res,
        userId: this.userInfo.id,
        id: this.post.id,
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
    this.description = [this.description.slice(0, this.caretPos), emoji, this.description.slice(this.caretPos)].join('');
    this.toggleEmoji(1)
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
}
