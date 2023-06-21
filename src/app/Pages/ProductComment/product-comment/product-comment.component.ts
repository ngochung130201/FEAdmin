import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { ModalComponent } from 'src/app/Layouts/modal/modal.component';
import { ProductCommentcommentService } from 'src/app/Services/productcomment.service';
import { TypeProductCommentDelete, TypeProductComments } from 'src/app/Types/ProductComments';

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.scss']
})
export class ProductCommentComponent {
  modalService: any;

  ngOnInit(): void {
    this.handleGetProductComment();

  }
//productCommentName ten nguoi binh luan
productCommentName! : string;
productName!:string;

  constructor(public dialog: MatDialog,private ProductCommentService: ProductCommentcommentService,private toast: NgToastService) {}
  getProductComments: Array<TypeProductComments> = [];

  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.name = 'World';
	}
  handleGetProductComment() {
    this.ProductCommentService.getAllProductComment().subscribe({
      next: (item => {
        this.getProductComments = item;
        item.map((data: any) =>{
          this.productCommentName = data.customer.fullName
          this.productName = data.product.name
        })
        return this.getProductComments;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }
  handleDelete(id : any) {
   
  
    this.ProductCommentService.deleteProductComment(id).subscribe(
      {
        next: (data => {
          this.handleGetProductComment()
          this.toast.success({detail:"Thành công ",summary:"Xóa bình luận",duration:5000});
        }),
        error: (err => {
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
  data : any = {
    commentID : 0,
    commentName:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>,commentID:any,commentName:string) {
    this.dialog.open(templateRef,{
      data: {
        commentID,
        commentName
      }
      
    });
  }


 
}
