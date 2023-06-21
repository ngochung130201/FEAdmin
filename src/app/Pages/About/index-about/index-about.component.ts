import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { AboutService } from 'src/app/Services/about.service';

@Component({
  selector: 'app-index-about',
  templateUrl: './index-about.component.html',
  styleUrls: ['./index-about.component.scss']
})
export class IndexAboutComponent {
  constructor(private aboutService:AboutService,private router:Router, private toast: NgToastService){


  }
  ngOnInit(): void {
    this.getAbout()
  }
  AboutFormEdit: FormGroup = new FormGroup({
    tilte:  new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    facebook: new FormControl('', Validators.required),
    zalo:  new FormControl('', Validators.required),
    metaKeyword:  new FormControl('', Validators.required),
    metaDescription:  new FormControl('', Validators.required),
    createBy:  new FormControl(0, Validators.required),
    updateBy:  new FormControl(0, Validators.required),
  
  })
  getAbout(){
    this.aboutService.getAbout(1).subscribe({
      next:(res=>{
        this.AboutFormEdit = new FormGroup({
          tilte:  new FormControl(res.tilte),
          description: new FormControl(res.description),
          facebook: new FormControl(res.facebook),
          zalo:  new FormControl(res.zalo),
          metaKeyword:  new FormControl(res.metaKeyword),
          metaDescription:  new FormControl(res.metaDescription),
          createBy:  new FormControl(res.createBy),
          updateBy:  new FormControl(res.updateBy),
        })
      }),
      error:(err=>{

      })
    })
  }
  OnSubmit(){
    this.aboutService.putAbout(1,this.AboutFormEdit.value).subscribe({
      next:(res=>{
        this.toast.success({detail:"Thành công ",summary:"Thay đổi thành công",duration:5000});
        this.router.navigate(['']);
      }),
      error:(err=>{
        this.toast.error({detail:"Thất bại ",summary:"Thay đổi thất bại",duration:5000});
      })

    })
  }
}
