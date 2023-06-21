import { Component, TemplateRef } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ProductcategoryService } from 'src/app/Services/productcategory.service';

import { ModalComponent } from 'src/app/Layouts/modal/modal.component';
import { TypeProductCategory, TypeProductCategoryDelete } from 'src/app/Types/productCategory';
import { PostcategoryService } from 'src/app/Services/postcategory.service';
import { TypePostCategory, TypePostCategoryDelete } from 'src/app/Types/post';

@Component({
  selector: 'app-index-blog-category',
  templateUrl: './index-blog-category.component.html',
  styleUrls: ['./index-blog-category.component.scss']
})
export class IndexBlogCategoryComponent {
  modalService: any;

  ngOnInit(): void {
    this.handleGetPostCategory();

  }


  constructor(public dialog: MatDialog,private PostCategoryService: PostcategoryService) {}
  getPostCategorys: Array<TypePostCategory> = [];

  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.name = 'World';
	}
  handleGetPostCategory() {
    this.PostCategoryService.getAllPostCategory().subscribe({
      next: (item => {
        this.getPostCategorys = item;
        console.log(item)
        return this.getPostCategorys;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }

  handleDelete(slug : string) {
   
  
    this.PostCategoryService.deletePostCategory(slug).subscribe(
      {
        next: (data => {
          this.handleGetPostCategory()
        }),
        error: (err => {
         
        })
      }
    )
  }
  data : TypePostCategoryDelete = {
    postCateName : "",
    slug:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>,slug:string,postCateName:string) {
    this.dialog.open(templateRef,{
      data: {
        slug,
        postCateName
      }
      
    });
  }

}
