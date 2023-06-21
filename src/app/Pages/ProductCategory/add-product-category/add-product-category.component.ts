import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { ProductcategoryService } from 'src/app/Services/productcategory.service';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.scss']
})
export class AddProductCategoryComponent {
  constructor(private router: Router, private productCategoryService: ProductcategoryService,private http : HttpClient,private toast : NgToastService) { }
  productCategoryFormCreate: FormGroup = new FormGroup({
    productCateName: new FormControl('', Validators.required),
    sort : new  FormControl('', Validators.required),
    parentID : new  FormControl('', Validators.required),
    metaKeyword : new  FormControl('', Validators.required),
    metaDescription : new  FormControl('', Validators.required),
  })
  
  HandleAdd(){
    this.productCategoryService.createProductCategory(this.productCategoryFormCreate.value).subscribe({
      next:(res=>{
        this.router.navigate(['/ProductCategpry'])
        this.toast.success({detail:"Thành công",summary:"Thêm mới thành công"})
      }),
      error:(err=>{
        console.log(err)
        this.toast.error({detail:"Thất bại",summary:"Vui lòng nhập đủ thông tin cần thiết"})
      })
      
    })
  }
}
