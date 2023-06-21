
/// <reference types="@types/ckeditor" />
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpEventType, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output,ViewChild } from '@angular/core';
import { environment } from 'src/app/Global/environment';
import * as uuid from 'uuid';
import { ProductService } from 'src/app/Services/product.service';
import { BrandService } from 'src/app/Services/brand.service';
import { TyBrand } from 'src/app/Types/brand';
import { SupplierService } from 'src/app/Services/supplier.service';
import { ProductcategoryService } from 'src/app/Services/productcategory.service';
import { TypeProductCategory } from 'src/app/Types/productCategory';
import { TySupplier } from 'src/app/Types/supplier';
declare var CKEDITOR: any;
import { CKEditorComponent } from 'ng2-ckeditor';
import { TypeProducts, TypeProductsCreate } from 'src/app/Types/product';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  constructor(private supplierService : SupplierService,private _formBuilder: FormBuilder,private productCategoryService : ProductcategoryService, private brandService : BrandService,private router: Router, private ProductService: ProductService,private http : HttpClient) { }
  name = 'ng2-ckeditor';
  ckeConfig!:  CKEDITOR.config;
  ckeConfig2!:  CKEDITOR.config;

  mycontent!: string;
  mycontent2!: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor!: CKEditorComponent;
  @ViewChild("myckeditor2") ckeditor2!: CKEditorComponent;

  ngOnInit(): void {
   this.getBrand()
   this.getSupplier()
   this.getProductCategory()
   this.ckeConfig = {
    allowedContent: false,
    extraPlugins: 'divarea',
    forcePasteAsPlainText: true,
    removePlugins: 'exportpdf'
  };
  this.ckeConfig2 = {
    allowedContent: false,
    extraPlugins: 'divarea',
    forcePasteAsPlainText: true,
    removePlugins: 'exportpdf'
  };
  
  
  }
  description! : string;
  ProductFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image : new  FormControl('', Validators.required),
    isFreeship : new  FormControl('', Validators.required),
    listImage : new  FormControl('', Validators.required),
    price : new  FormControl('', Validators.required),
    promotionPrice : new  FormControl('', Validators.required),
    quantity : new  FormControl('', Validators.required),
    hot : new FormControl<Date | null>(null),
    content : new  FormControl('', Validators.required),
    description : new  FormControl('', Validators.required),
    viewCount : new  FormControl(0, Validators.required),
    metaKeyword : new  FormControl('', Validators.required),
    metaDescription : new  FormControl('', Validators.required),
    createBy : new  FormControl(0, Validators.required),
    updateBy : new  FormControl(0, Validators.required),
    cateID : new  FormControl('', Validators.required),
    supplierid : new  FormControl('', Validators.required),
    brandID : new  FormControl('', Validators.required)
  
  })
  handleGenerationId() : string{
    // console.log(typeof uuid()); 
    const myId = uuid.v4();
    const idSubstring = myId.substring(0,8);
    return  idSubstring;
   }
   HanldeCreate(imagePath:string) {
    // if (!this.ProductFormCreate.valid) {
     
    //   return;
    // }
    let description = this.ProductFormCreate.controls['description'].value;
    let isFreeship = this.ProductFormCreate.controls['isFreeship'].value;
    let brandID = this.ProductFormCreate.controls['brandID'].value;
    let cateID = this.ProductFormCreate.controls['cateID'].value;
    let content = this.ProductFormCreate.controls['content'].value;
    let createBy = this.ProductFormCreate.controls['createBy'].value;
    let viewCount = this.ProductFormCreate.controls['viewCount'].value;
    let hot = this.ProductFormCreate.controls['hot'].value;
    let listImage = this.ProductFormCreate.controls['listImage'].value;
    let metaDescription = this.ProductFormCreate.controls['metaDescription'].value;
    let price = this.ProductFormCreate.controls['price'].value;
    let metaKeyword = this.ProductFormCreate.controls['metaKeyword'].value;
    let promotionPrice = this.ProductFormCreate.controls['promotionPrice'].value;
    let quantity = this.ProductFormCreate.controls['quantity'].value;
    let supplierid = this.ProductFormCreate.controls['supplierid'].value;
    let updateBy = this.ProductFormCreate.controls['updateBy'].value;
    isFreeship = this.hanldeFreeShip.value.isFreeship;

    console.log(isFreeship)
    description = this.description;
    console.log(this.ProductFormCreate.value)
    console.log(description)
    const name = this.ProductFormCreate.controls['name'].value ;
    const image = imagePath;
    const ProductForm  : TypeProductsCreate= {
      brandID,
      cateID,
      content,
      createBy,
      description,
      hot,
      isFreeship,
      listImage,
      metaDescription,
      metaKeyword,
      name,
      price,
      promotionPrice,
      quantity,
      supplierid,
      updateBy,
      viewCount,
      image
    }
    console.log(ProductForm)
    this.ProductService.createProduct(ProductForm)
      .subscribe(
        item => {
          console.log(item)
          this.router.navigate(['/Product']);
        },
        err => {
          console.log(err);
         
        }
      );
  }
  listBrand : Array<TyBrand> = []
  listProductCategory : Array<TypeProductCategory> = []
  listSupplier: Array<TySupplier> = []
  getBrand()  {
    this.brandService.getAllBrand().subscribe(res=>{
     this.listBrand = res;
     console.log(res)
     return this.listBrand;
    })
  }

 getSupplier(){
  this.supplierService.getAllSupplier().subscribe(res=>{
    this.listSupplier = res;
    console.log(res)
    return this.listSupplier;
   })
 }
 getProductCategory(){
  this.productCategoryService.getAllProductCategory().subscribe(res=>{
    this.listProductCategory = res;
    console.log(res)
    return this.listProductCategory;
   })
 }
  working = false;
  uploadFile: File | any;
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: any;
  uploadUrl: any;

  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.uploadFile = files.item(0);
      this.uploadFileLabel = this.uploadFile?.name;
    }
  }

  HanldeUpload() {
    //console.log(this.ProductFormCreate.value)
   
    if (!this.uploadFile) {
      alert('Choose a file to upload first');
      return;
    }
    const uuid = this.handleGenerationId();
    const formData = new FormData();
    formData.append(this.uploadFile.name, this.uploadFile);

    const url = `${environment.apiUrl}/UploadFile?folder=Product&genId=${uuid}`;
    const uploadReq = new HttpRequest('POST', url, formData, {
      reportProgress: true,
    });

    this.uploadUrl = '';
    this.uploadProgress = 0;
    this.working = true;
//https://localhost:7177/images/samsung-galaxy-s23-600x600.jpg
    this.http.request(uploadReq).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.uploadUrl ="https://localhost:7177/" +event.body.url;
       this.HanldeCreate( this.uploadUrl)
     //  return this.uploadUrl
      }
    }, (error: any) => {
      console.error(error);
      console.log(this.uploadFile.name)
    }).add(() => {
      this.working = false;

    });
  }

  onChange($event: any): string {
    //console.log($event);
    this.description = $event;
    return this.description;
    
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }
  hanldeFreeShip = this._formBuilder.group(
    {
      isFreeship : false
    }
  )
  // hot 
  range = new FormGroup({
    hot: new FormControl<Date | null>(null),
   end: new FormControl<Date | null>(null),
  });
}
