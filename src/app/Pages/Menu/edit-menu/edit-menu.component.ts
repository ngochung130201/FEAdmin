import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MenuService } from 'src/app/Services/menu.service';
import { TyMenu } from 'src/app/Types/menu';
import { parse } from 'uuid';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss']
})
export class EditMenuComponent {
  constructor(private router: Router,private _routerAc: ActivatedRoute,private toast: NgToastService, private menuService: MenuService,private http : HttpClient,private _formBuilder: FormBuilder) { }
  menuFormEdit: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    isStatus : new  FormControl('', Validators.required),
  
    
  })
  id : number = 0
  ngOnInit(): void {
   this.id = this._routerAc.snapshot.params['id'];
   this.menuService.getMenu(this.id).subscribe({
    next: (res => {
      console.log(res)
      console.log(this.id)
      this.menuFormEdit = new FormGroup({
        name: new FormControl(res.name),
        isStatus : new  FormControl(res.isStatus),
      
        
      })
      
    }),
    error: (err => {
      console.log(err);
    })
  })
  }
  
  HandleUpdate(){

    
    this. menuService.updateMenu(this.id,this.menuFormEdit.value).subscribe({
      next:(res=>{
        this.toast.success({detail:"Thành công ",summary:"Cập nhật thành công",duration:5000});
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
