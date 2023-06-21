import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductService } from 'src/app/Services/product.service';
import { ResultPrododuct, TyDeleteProduct, TypeProducts } from 'src/app/Types/product';
import { NgToastService } from 'ng-angular-popup';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PostService } from 'src/app/Services/post.service';
import { tySort } from '../../Product/list-product/list-product.component';
import { TyDeletePost, TypePosts } from 'src/app/Types/post';
@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.scss']
})
export class ListBlogComponent {
  constructor(public dialog: MatDialog,private postService:PostService, private toast: NgToastService,private paginator: MatPaginatorIntl) {

    paginator.itemsPerPageLabel = 'Hiển thị '
  }
 
  ngOnInit(): void {
    var resutl =  this.getpostALL(1,3,"viewCount","asc")
  //  console.log(resutl)
    console.log(this.totalRecord)
    this.postFormSeach.valueChanges.subscribe({
      next:((s : any)=>{
      const s_split  = s.sorts.split("_")
      const   sort = s_split[0]
       const  typeSort = s_split[1]
     
      console.log(this.currentPageNumber)
      this.getpostALL(this.currentPageNumber,this.pageSize,sort,typeSort,"name",s.search!)

    
        
      })
    })
   this.listSort.map(item=>{
      console.log(item.name)
    })
   //this.hanldeDatapost(true)
   
  }

  listSort: tySort[] = [
   {
    name : "Lượt xem",
    value: "viewCount",
    typeSort:"desc"
   }
  ];
  dafaultOption :string = "Giá tăng dần"

  postFormSeach :FormGroup = new FormGroup({
    search: new FormControl(''),
    sorts : new FormControl(''),

  });
  
  sort!: string;
  tySort!:string;
 
  posts: Array<TypePosts> = [];
  totalRecord! : number;
  totalPages! : number;
  currentPageNumber!: number;
  hasNextPage!: boolean;
  pageSize!: number;
  getpostALL(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort?:string,where?:string,search:string = '')   {
    this.postService.getAllpost(currentPageNumber, pageSize,sort,typeSort,search,where).subscribe(posts => {
      this.posts = posts.data;
     console.log(posts)
      this.pageSize = posts.pageSize
      this.totalRecord = posts.totalRecords
      this.totalPages = posts.totalPages
      this.currentPageNumber = posts.currentPageNumber
      this.hasNextPage = posts.hasNextPage
      return  posts ;
    })
  
  }
  OnHandlePaging(currentPageNumber:number,pageSize:number){
    this.getpostALL(currentPageNumber,pageSize,"viewCount","asc")
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
   
  
    this.postService.deletepost(slug).subscribe(
      {
        next: (data => {
          this.getpostALL(1,3,"viewCount","asc")
          this.toast.success({detail:"Thành công ",summary:"Xóa bài viết",duration:5000});
        }),
        error: (err => {
          console.log(err)
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
  data : TyDeletePost = {
    slug : "",
    name:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<TyDeletePost>,slug:any,name:string) {
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
