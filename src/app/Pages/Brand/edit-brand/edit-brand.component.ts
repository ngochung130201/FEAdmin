
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/Services/brand.service';
import { HttpClient, HttpEventType, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/app/Global/environment';
import * as uuid from 'uuid';
@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.scss']
})
export class EditBrandComponent {
  constructor(private _routerAc: ActivatedRoute,private router: Router, private BrandService: BrandService,private http : HttpClient) { }
  brandID: number  = 0;
 
  imageString = '';
  ngOnInit(): void {
    this.brandID = this._routerAc.snapshot.params['id'];
    console.log(this.brandID)
    
    this.BrandService.getBrand(this.brandID).subscribe({
      next: (res => {
        this.brandFormEdit = new FormGroup({
          brandID: new FormControl(this.brandID),
          brandName: new FormControl(res.brandName),
          image : new FormControl(res.image),
        })
        this.imageString = res.image
        this.uploadUrl = this.handleCheckIamge(this.imageString)
      }),
      error: (err => {
        console.log(err);
      })
    })
    
    console.log( this.uploadUrl )
  }
  handleCheckIamge(imageString :string) : any{
    if(imageString != ""){
      this.uploadUrl = imageString
      return this.uploadUrl;
    }
  }
  brandFormEdit: FormGroup = new FormGroup({
    brandName: new FormControl('', Validators.required),
    image : new  FormControl('', Validators.required)
  })
  handleGenerationId() : string{
    // console.log(typeof uuid()); 
    const myId = uuid.v4();
    const idSubstring = myId.substring(0,8);
    return  idSubstring;
   }
  handleData(imagePath:string) {
    // if (!this.brandFormCreate.valid) {
     
    //   return;
    // }
   
    const brandName = this.brandFormEdit.controls['brandName'].value ;
    const image = imagePath;
    const brandForm = {
      brandName,
      image
    }

    this.BrandService.updateBrand(this.brandID,brandForm)
      .subscribe(
        item => {
          console.log(item)
          this.router.navigate(['/Brand']);
        },
        err => {
          console.log(err);
         
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

  HanldeEditupload() {
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
       this.handleData( this.uploadUrl)
       console.log(this.uploadUrl)
       console.log(this.uploadFile.name)
      }
    }, (error: any) => {
      console.error(error);
      console.log(this.uploadFile.name)
    }).add(() => {
      this.working = false;

    });
  }

}
