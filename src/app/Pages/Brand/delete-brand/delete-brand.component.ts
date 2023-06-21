import { Component, Inject } from '@angular/core';
import { ListBrandComponent } from '../list-brand/list-brand.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TyBrand, TypeDeleteBrand } from 'src/app/Types/brand';
import { BrandService } from 'src/app/Services/brand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.scss']
})
export class DeleteBrandComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TypeDeleteBrand, private toast: NgToastService,private _ac : ActivatedRoute , private BrandService: BrandService, private router: Router) { }

  ngOnInit(): void {
    this.handleDelete()
  }

  getBrands: Array<TyBrand> = [];
   brandID :number = 0;
   TypeDelete = {
    name : this.data.brandName
   };
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
  handleDelete() {
    this.brandID = this.data.brandID;
    console.log(this.brandID);
    this.BrandService.deleteBrand(this.data.brandID ).subscribe(
      {
        next: (data => {
          this.toast.success({detail:"Thanh cong",summary:"Your Success Message",duration:5000});
        //  this.handleGetBrand()
         // this.router.navigate(['/Brand']);
        }),
        error: (err => {
         
        })
      }
    )
  }
  showSuccess() {
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
  }


}
