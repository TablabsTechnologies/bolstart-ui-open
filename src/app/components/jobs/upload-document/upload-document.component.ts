import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {
  dragAreaClass: string;
  sampleCsvFile;
  bulkUpload: FormGroup = this.fb.group({
    fileBase64: ['', Validators.required],
    fileName: ['', Validators.required],
    flag: [true,]
  })
  formData = new FormData();
  blob: any
  constructor(
    public dialogRef: MatDialogRef<UploadDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.sampleCsvFile = "assets/files/Sample.csv"
  }

  async getUploadedDoc(event) {
    this.bulkUpload.get('fileBase64').patchValue(await this.getBase64(event.target.files[0]))
  }
  getBase64(file): any {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
        resolve(reader.result)
      };
      reader.onerror = function (error) {
        reject(error)
      };
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(bulkUpload: any, valid: boolean): void {
    this.dialogRef.close({ ...bulkUpload, ...{ blob: this.blob } });
  }

  // getFileBlob(fileContent) {
  //   return new Promise((resolve, reject) => {
  //     fetch(fileContent)
  //       .then(res => res.blob())
  //       .then(blob => {
  //         resolve(blob);
  //       })
  //   })
  // }

}

