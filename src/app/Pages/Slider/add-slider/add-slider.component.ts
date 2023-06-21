
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SliderService } from 'src/app/Services/slider.service';
import { HttpClient, HttpEventType, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/app/Global/environment';
import * as uuid from 'uuid';
import { TySlider } from 'src/app/Types/slider';

@Component({
  selector: 'app-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.scss']
})
export class AddSliderComponent {
  constructor(private router: Router, private sliderService: SliderService,private http : HttpClient) { }
  
  ngOnInit(): void {
   
  }
  sliderFormCreate: FormGroup = new FormGroup({
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
   HanldeCreate(imagePath:string) {
    // if (!this.sliderFormCreate.valid) {
     
    //   return;
    // }
   
    const link = this.sliderFormCreate.controls['link'].value ;
    const title = this.sliderFormCreate.controls['title'].value ;
    const isStatus = this.sliderFormCreate.controls['isStatus'].value;
    
    const image = imagePath;
    const sliderForm : any = {
  
      title,
      image,
      
    }

    this.sliderService.createSlider(sliderForm)
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

  HanldeUpload() {
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
