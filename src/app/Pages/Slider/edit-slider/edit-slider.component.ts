
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { HttpClient, HttpEventType, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/app/Global/environment';
import * as uuid from 'uuid';
import { SliderService } from 'src/app/Services/slider.service';

@Component({
  selector: 'app-edit-slider',
  templateUrl: './edit-slider.component.html',
  styleUrls: ['./edit-slider.component.scss']
})
export class EditSliderComponent {
  constructor(private _routerAc: ActivatedRoute,private router: Router, private sliderService: SliderService,private http : HttpClient) { }
  id: number  = 0;
 
  imageString = '';
  ngOnInit(): void {
    this.id = this._routerAc.snapshot.params['id'];
    console.log(this.id)
    
    this.sliderService.getSlider(this.id).subscribe({
      next: (res => {
        console.log(res)
        this.sliderFormEdit = new FormGroup({
          title: new FormControl(res.title),
          image : new  FormControl(res.image),
          link : new  FormControl(res.link),
          isStatus : new  FormControl(res.isStatus),
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
  sliderFormEdit: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image : new  FormControl('', Validators.required),
    link : new  FormControl('', Validators.required),
    isStatus : new  FormControl('', Validators.required),
  })
  handleGenerationId() : string{
    // console.log(typeof uuid()); 
    const myId = uuid.v4();
    const idSubstring = myId.substring(0,8);
    return  idSubstring;
   }
  handleData(imagePath:string) {
    // if (!this.sliderFormEdit.valid) {
     
    //   return;
    // }
   
    const link = "" ;
    const title = this.sliderFormEdit.controls['title'].value ;
    const isStatus = true;
    const image = imagePath;
    const id = this.id
    const sliderForm = {
      title,
      image,
      link,
      isStatus,
      id
    }

    this.sliderService.updateslider(this.id,sliderForm)
      .subscribe(
        item => {
          console.log(item)
          this.router.navigate(['/Slider']);
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

    const url = `${environment.apiUrl}/UploadFile?folder=slider&genId=${uuid}`;
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