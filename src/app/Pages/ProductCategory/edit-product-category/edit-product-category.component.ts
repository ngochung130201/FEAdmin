import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductcategoryService } from 'src/app/Services/productcategory.service';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.scss']
})
export class EditProductCategoryComponent {
   
  
  constructor(private router: Router,private _routerAc : ActivatedRoute, private productCategoryService: ProductcategoryService,private http : HttpClient) { }
  productCategoryFormEdit: FormGroup = new FormGroup({
    productCateName: new FormControl('', Validators.required),
    sort : new  FormControl('', Validators.required),
    parentID : new  FormControl('', Validators.required),
    metaKeyword : new  FormControl('', Validators.required),
    metaDescription : new  FormControl('', Validators.required),
  })
  slug = ""
  ngOnInit(): void {
    this.slug = this._routerAc.snapshot.params['slug'];
    console.log(this.slug)
    
    this.productCategoryService.getProductCategory(this.slug).subscribe({
      next: (res => {
        console.log(res)
        this.productCategoryFormEdit = new FormGroup({
          productCateName: new FormControl(res.productCateName),
          sort : new  FormControl(res.sort),
          parentID : new  FormControl(res.parentID),
          metaKeyword : new  FormControl(res.metaKeyword),
          metaDescription : new  FormControl(res.metaDescription),
        
        })
        
      }),
      error: (err => {
        console.log(err);
      })
    })
    
  
  }
  HandleEdit(){
    this.productCategoryService.updateProductCategory(this.slug,this.productCategoryFormEdit.value).subscribe({
      next:(res=>{
        this.router.navigate(['/ProductCategpry'])
      }),
      error:(err=>{
        console.log(err)
      })
      
    })
  }
}
