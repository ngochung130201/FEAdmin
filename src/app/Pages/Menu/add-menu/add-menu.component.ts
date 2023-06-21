import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MenuService } from 'src/app/Services/menu.service';
import { TyMenu, TypeMenuCreate } from 'src/app/Types/menu';
import { parse } from 'uuid';



@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {
  constructor(private router: Router, private toast: NgToastService , private menuService: MenuService,private http : HttpClient,private _formBuilder: FormBuilder) { }
  menuFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    isStatus : new  FormControl('', Validators.required),
  
    
  })
  ngOnInit(): void {
   
  }
  
  HandleAdd(){
    console.log()
    let isStatus = this.menuFormCreate.controls['isStatus'].value;
    let name = this.menuFormCreate.controls['name'].value;
    isStatus = this.hanldeStatus.value.status;
   const  dataMenu : TypeMenuCreate = {
    isStatus: isStatus,
    name:name

    }
    this. menuService.createMenu(dataMenu).subscribe({
      next:(res=>{
        this.toast.success({detail:"Thành công ",summary:"Tạo mới thành công",duration:5000});
        this.router.navigate(['/Menu'])
      }),
      error:(err=>{
        this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
      })
      
    })
  }
  hanldeStatus = this._formBuilder.group({
    status: false,

  });


}
