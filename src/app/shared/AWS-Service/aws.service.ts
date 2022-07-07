import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as S3 from 'aws-sdk/clients/s3';
@Injectable({
  providedIn: 'root'
})
export class AwsService {
  bucket = new S3(
    {
      accessKeyId: 'AKIATVIMWQHEZR7X6ZFE',
      secretAccessKey: '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',
      region: 'ap-south-1'
    }
  );
  constructor(
    private toastr: ToastrService,
  ) { }
  uploadFile(file, folder) {
    let fileUrl
    const contentType = file.type;

    const params = {
      Bucket: 'bolstartimages',
      Key: `${folder}/` + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    return new Promise(resolve => {
      this.bucket.upload(params, function (err, data) {
        if (err) {
          return false;
        }
        fileUrl = data.Location
        resolve(fileUrl);
      });
    })
  }
}