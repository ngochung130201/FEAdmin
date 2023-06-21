import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TySupplier } from 'src/app/Types/supplier';
import { DeleteSuppliersComponent } from '../delete-suppliers/delete-suppliers.component';
import { SupplierService } from 'src/app/Services/supplier.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-index-suppliers',
  templateUrl: './index-suppliers.component.html',
  styleUrls: ['./index-suppliers.component.scss']
})
export class IndexSuppliersComponent {
  constructor(public dialog: MatDialog, private SuppliersService: SupplierService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.handleGetSuppliers();
  }
  getSuppliers: Array<TySupplier> = [];
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, SuppliersID: string, name: string): void {
    this.dialog.open(DeleteSuppliersComponent, {
      width: '250px',
      data:
      {
        SuppliersID: SuppliersID,
        name: name,
      }

    });
  }
  handleGetSuppliers() {
    this.SuppliersService.getAllSupplier().subscribe(data => {
      this.getSuppliers = data;
      return this.getSuppliers;
    })
  }
  handleDelete(id : any) {
   
  
    this.SuppliersService.deleteSupplier(id).subscribe(
      {
        next: (data => {
          this.handleGetSuppliers()
          this.toast.success({detail:"Thành công ",summary:"Xóa thương hiệu",duration:5000});
        }),
        error: (err => {
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
  data : any = {
    brandID : 0,
    brandName:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>,brandID:any,brandName:string) {
    this.dialog.open(templateRef,{
      data: {
        brandID,
        brandName
      }
      
    });
  }
}
