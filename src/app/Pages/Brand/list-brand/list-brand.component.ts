import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBrandComponent } from '../delete-brand/delete-brand.component';
import { TyBrand, TypeDeleteBrand } from 'src/app/Types/brand';
import { BrandService } from 'src/app/Services/brand.service';

import { ModalComponent } from 'src/app/Layouts/modal/modal.component';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss'],
 
})
export class ListBrandComponent {
  modalService: any;

  ngOnInit(): void {
    this.handleGetBrand();

  }


  constructor(public dialog: MatDialog,private BrandService: BrandService, private toast: NgToastService) {}
  getBrands: Array<TyBrand> = [];

  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.name = 'World';
	}
  handleGetBrand() {
    this.BrandService.getAllBrand().subscribe({
      next: (item => {
        this.getBrands = item;
        return this.getBrands;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }

  handleDelete(id : any) {
   
  
    this.BrandService.deleteBrand(id).subscribe(
      {
        next: (data => {
          this.handleGetBrand()
          this.toast.success({detail:"Thành công ",summary:"Xóa thương hiệu",duration:5000});
        }),
        error: (err => {
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
  data : TypeDeleteBrand = {
    brandID : 0,
    brandName:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<TypeDeleteBrand>,brandID:any,brandName:string) {
    this.dialog.open(templateRef,{
      data: {
        brandID,
        brandName
      }
      
    });
  }



}
