import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { ProductService } from 'src/app/Services/product.service';
import { ResultPrododuct, TyDeleteProduct, TypeProducts } from 'src/app/Types/product';
import { NgToastService } from 'ng-angular-popup';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
export type tySort = {
  name:string,
  value:string,
  typeSort:string
}
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})

export class ListProductComponent {
  constructor(public dialog: MatDialog,private productService:ProductService, private toast: NgToastService,private paginator: MatPaginatorIntl) {

    paginator.itemsPerPageLabel = 'Hiển thị '
  }
 
  ngOnInit(): void {
    var resutl =  this.getProductALL(1,3,"price","asc")
  //  console.log(resutl)
    console.log(this.totalRecord)
    this.ProductFormSeach.valueChanges.subscribe({
      next:((s : any)=>{
      const s_split  = s.sorts.split("_")
      const   sort = s_split[0]
       const  typeSort = s_split[1]
     
      console.log(this.currentPageNumber)
      this.getProductALL(this.currentPageNumber,this.pageSize,sort,typeSort,"name",s.search!)

    
        
      })
    })
   this.listSort.map(item=>{
      console.log(item.name)
    })
   //this.hanldeDataProduct(true)
   
  }

  listSort: tySort[] = [
   {
    name : "Giá giảm dần",
    value: "price",
    typeSort:"desc"
   },
   {
    name : "Giá tăng dần",
    value: "price",
    typeSort:"asc"
   },
   {
    name : "Lượt xem",
    value: "viewCount",
    typeSort:"desc"
   }
  ];
  dafaultOption :string = "Giá tăng dần"

  ProductFormSeach :FormGroup = new FormGroup({
    search: new FormControl(''),
    sorts : new FormControl(''),

  });
  
  sort!: string;
  tySort!:string;
 
  products: Array<TypeProducts> = [];
  totalRecord! : number;
  totalPages! : number;
  currentPageNumber!: number;
  hasNextPage!: boolean;
  pageSize!: number;
  getProductALL(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort?:string,where?:string,search:string = '')   {
    this.productService.getAllProduct(currentPageNumber, pageSize,sort,typeSort,search,where).subscribe(products => {
      this.products = products.data;
     console.log(products)
      this.pageSize = products.pageSize
      this.totalRecord = products.totalRecords
      this.totalPages = products.totalPages
      this.currentPageNumber = products.currentPageNumber
      this.hasNextPage = products.hasNextPage
      return  products ;
    })
  
  }
  OnHandlePaging(currentPageNumber:number,pageSize:number){
    this.getProductALL(currentPageNumber,pageSize,"price","asc")
  }
  counter(i: number) {
    return new Array(i);
  }
  OnActionPaging(action:boolean,currentPageNumber:number,pageSize:number){
    if(action){
      const currentPageNumberNext = ++currentPageNumber;
     
      if(currentPageNumberNext > this.totalPages){
        console.log("het")
      }
      else {
        this.OnHandlePaging(currentPageNumberNext,pageSize)
      }
    
    
    }
   else {
    const currentPageNumberPreviuos = --currentPageNumber;
      this.OnHandlePaging(currentPageNumberPreviuos,pageSize)
   }
  }
  handleDelete(slug : any) {
   
  
    this.productService.deleteProduct(slug).subscribe(
      {
        next: (data => {
          this.getProductALL(1,3,"price","asc")
          this.toast.success({detail:"Thành công ",summary:"Xóa sản phẩm",duration:5000});
        }),
        error: (err => {
          console.log(err)
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
  data : TyDeleteProduct = {
    slug : "",
    name:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<TyDeleteProduct>,slug:any,name:string) {
    this.dialog.open(templateRef,{
      data: {
        name,
        slug
      }
      
    });
  }
 // list pageSize 
 listPageSize : Array<number> = [2,4,5]
 length = 50;
 pageIndex = 0;
 hidePageSize = false;
 showPageSizeOptions = true;
 showFirstLastButtons = true;
 disabled = false;

 pageEvent!: PageEvent;

 handlePageEvent(e: PageEvent) {
   this.pageEvent = e;
   this.pageSize = e.pageSize;
   this.OnHandlePaging(1,this.pageSize)
   
 }



}