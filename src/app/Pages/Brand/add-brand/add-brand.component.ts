
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/Services/brand.service';
import { HttpClient, HttpEventType, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/app/Global/environment';
import * as uuid from 'uuid';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {
  constructor(private router: Router, private BrandService: BrandService,private http : HttpClient, private toast: NgToastService) { }
  
  ngOnInit(): void {
   
  }
  brandFormCreate: FormGroup = new FormGroup({
    brandName: new FormControl('', Validators.required),
    image : new  FormControl('', Validators.required)
  })
  handleGenerationId() : string{
    // console.log(typeof uuid()); 
    const myId = uuid.v4();
    const idSubstring = myId.substring(0,8);
    return  idSubstring;
   }
   HanldeCreate(imagePath:string) {
    // if (!this.brandFormCreate.valid) {
     
    //   return;
    // }
   
    const brandName = this.brandFormCreate.controls['brandName'].value ;
    const image = imagePath;
    const brandForm = {
      brandName,
      image
    }

    this.BrandService.createBrand(brandForm)
      .subscribe(
        item => {
          console.log(item)
          this.router.navigate(['/Brand']);
          this.toast.success({detail:"Thành công ",summary:"Thêm mới thương hiệu",duration:5000});
        },
        err => {
          console.log(err);
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        }
      );
  }


  working = false;
  uploadFile: File | any;
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: any;
  uploadUrl: any;

  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.uploadFile = files.item(0);
      this.uploadFileLabel = this.uploadFile?.name;
    }
  }

  HanldeUpload() {
    if (!this.uploadFile) {
      alert('Choose a file to upload first');
      return;
    }
    const uuid = this.handleGenerationId();
    const formData = new FormData();
    formData.append(this.uploadFile.name, this.uploadFile);

    const url = `${environment.apiUrl}/UploadFile?folder=Brand&genId=${uuid}`;
    const uploadReq = new HttpRequest('POST', url, formData, {
      reportProgress: true,
    });

    this.uploadUrl = '';
    this.uploadProgress = 0;
    this.working = true;
//https://localhost:7177/images/samsung-galaxy-s23-600x600.jpg
    this.http.request(uploadReq).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.uploadUrl ="https://localhost:7177/" +event.body.url;
       this.HanldeCreate( this.uploadUrl)
     //  return this.uploadUrl
      }
    }, (error: any) => {
      console.error(error);
      console.log(this.uploadFile.name)
    }).add(() => {
      this.working = false;

    });
  }





}
