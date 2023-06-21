import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { tySort } from 'src/app/Pages/Product/list-product/list-product.component';
import { OrderService } from 'src/app/Services/order.service';
import { ProductService } from 'src/app/Services/product.service';
import { TyDeleteProduct, TypeProducts } from 'src/app/Types/product';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {
  constructor(private router: Router,private _routerAc : ActivatedRoute,private http : HttpClient,
    
    private orderService : OrderService,
    public dialog: MatDialog,private productService:ProductService, private toast: NgToastService,private paginator: MatPaginatorIntl
    
    ) { 



  }
  OrderDetail: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email : new  FormControl('', Validators.required),
    phone : new  FormControl('', Validators.required),
    address : new  FormControl('', Validators.required),
    subject : new  FormControl('', Validators.required),
    body : new  FormControl('', Validators.required),
    createDate : new  FormControl('', Validators.required),
  })
  orderId : string = ''
  disabled: boolean = true;
  ngOnInit(): void {
    this.orderId = this._routerAc.snapshot.params['id'];
   
 
    this.orderService.getOrderDetailById(this.orderId).subscribe({
      next: (res => {
        console.log(res.product)
        this.products = res
        res.map((item: any)=>{
          console.log(item)
        })
        this.OrderDetail = new FormGroup({
          name: new FormControl({value:res.name,disabled: this.disabled}),
          email : new  FormControl({value:res.email,disabled:this.disabled}),
          phone : new  FormControl({value:res.phone,disabled:this.disabled}),
          address : new  FormControl({value:res.address,disabled:this.disabled}),
          subject : new  FormControl({value:res.subject,disabled:this.disabled}),
          body : new  FormControl({value:res.body,disabled:this.disabled}),
          createDate : new  FormControl({value:res.createDate,disabled:this.disabled}),
        
        })
        
      }),
      error: (err => {
        console.log(err);
      })
    })
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
 
  products: Array<any> = [];
  totalRecord! : number;
  totalPages! : number;
  currentPageNumber!: number;
  hasNextPage!: boolean;
  pageSize!: number;
  getProductALL(currentPageNumber?: number, pageSize?: number, sort?: string,typeSort?:string,where?:string,search:string = '')   {
    this.productService.getAllProduct(currentPageNumber, pageSize,sort,typeSort,search,where).subscribe(products => {
      //this.products = products.data;
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


 pageEvent!: PageEvent;

 handlePageEvent(e: PageEvent) {
   this.pageEvent = e;
   this.pageSize = e.pageSize;
   this.OnHandlePaging(1,this.pageSize)
   
 }



}
