import { Component, TemplateRef } from '@angular/core';
import { DeleteProductCategoryComponent } from '../delete-product-category/delete-product-category.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductcategoryService } from 'src/app/Services/productcategory.service';

import { ModalComponent } from 'src/app/Layouts/modal/modal.component';
import { TypeProductCategory, TypeProductCategoryDelete } from 'src/app/Types/productCategory';
@Component({
  selector: 'app-list-product-category',
  templateUrl: './list-product-category.component.html',
  styleUrls: ['./list-product-category.component.scss']
})
export class ListProductCategoryComponent {

  modalService: any;

  ngOnInit(): void {
    this.handleGetProductCategory();

  }


  constructor(public dialog: MatDialog,private ProductCategoryService: ProductcategoryService) {}
  getProductCategorys: Array<TypeProductCategory> = [];
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, ProductCategoryID: number | undefined, ProductCategoryName: string ): void {
    this.dialog.open(DeleteProductCategoryComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        ProductCategoryID: ProductCategoryID,
        ProductCategoryName: ProductCategoryName,
      }
    });
  } 
  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.name = 'World';
	}
  handleGetProductCategory() {
    this.ProductCategoryService.getAllProductCategory().subscribe({
      next: (item => {
        this.getProductCategorys = item;
        console.log(item)
        return this.getProductCategorys;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }

  handleDelete(slug : string) {
   
  
    this.ProductCategoryService.deleteProductCategory(slug).subscribe(
      {
        next: (data => {
          this.handleGetProductCategory()
        }),
        error: (err => {
         
        })
      }
    )
  }
  data : TypeProductCategoryDelete = {
    productCateName : "",
    slug:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>,slug:string,productCateName:string) {
    this.dialog.open(templateRef,{
      data: {
        slug,
        productCateName
      }
      
    });
  }

}
