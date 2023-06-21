
/// <reference types="@types/ckeditor" />
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import { TypeProducts, TypeProductsEdit } from 'src/app/Types/product';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  providers: [MessageService]
})
export class EditProductComponent {
  constructor(
    private messageService: MessageService,
    private _routerAc : ActivatedRoute, private supplierService : SupplierService,private _formBuilder: FormBuilder,private productCategoryService : ProductcategoryService, private brandService : BrandService,private router: Router, private ProductService: ProductService,private http : HttpClient) { }
  name = 'ng2-ckeditor';
  ckeConfig!:  CKEDITOR.config;
  ckeConfig2!:  CKEDITOR.config;
  slug! :string;
  mycontent!: string;

  log: string = '';
  @ViewChild("myckeditor") ckeditor!: CKEditorComponent;
  @ViewChild("myckeditor2") ckeditor2!: CKEditorComponent;
  uploadedFiles: any[] = [];
  ngOnInit(): void {
   this.getBrand()
   this.getSupplier()
   this.getProductCategory()
   this.slug = this._routerAc.snapshot.params['slug'];
   this.getProduct(this.slug)
  
   console.log( this.description)
   this.ckeConfig = {
  allowedContent: false,
    extraPlugins: 'uploadimage',
    forcePasteAsPlainText: true,
    removePlugins: 'exportpdf',

    uploadUrl:      'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

    // Configure your file manager integration. This example uses CKFinder 3 for PHP.
    filebrowserBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
    filebrowserImageBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
    filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images'
  };
  this.ckeConfig2 = {
    allowedContent: false,
    extraPlugins: 'uploadimage',
    forcePasteAsPlainText: true,
    removePlugins: 'exportpdf',

    uploadUrl:      'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

    // Configure your file manager integration. This example uses CKFinder 3 for PHP.
    filebrowserBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
    filebrowserImageBrowseUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
    filebrowserUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
    filebrowserImageUploadUrl:'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images'
  };
  
  
  }
  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
  description! : string;
  ProductFormEdit: FormGroup = new FormGroup({
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
    EditBy : new  FormControl(0, Validators.required),
    updateBy : new  FormControl(0, Validators.required),
    cateID : new  FormControl('', Validators.required),
    supplierid : new  FormControl('', Validators.required),
    brandID : new  FormControl('', Validators.required)
  
  })

  getProduct(slug:string){
    this.ProductService.getProduct(slug).subscribe({
      next:(res=>{
         this.description = res.description
        this.ProductFormEdit = new FormGroup({
          name: new FormControl(res.name),
          image : new  FormControl(res.image),
          isFreeship : new  FormControl(res.isFreeship),
          listImage : new  FormControl(res.listImage),
          price : new  FormControl(res.price),
          promotionPrice : new  FormControl(res.promotionPrice),
          quantity : new  FormControl(res.quantity),
          hot : new FormControl<Date | null>(null),
          content : new  FormControl(res.content),
          description : new  FormControl(res.description),
          viewCount : new  FormControl(res.viewCount),
          metaKeyword : new  FormControl(res.metaKeyword),
          metaDescription : new  FormControl(res.metaDescription),
          EditBy : new  FormControl(res.EditBy),
          updateBy : new  FormControl(res.updateBy),
          cateID : new  FormControl(res.cateID),
          supplierid : new  FormControl(res.supplierid),
          brandID : new  FormControl(res.brandID)
        
        })
        return  this.description
      }),
      error:(err=>{

      })
    })
  }
  handleGenerationId() : string{
    // console.log(typeof uuid()); 
    const myId = uuid.v4();
    const idSubstring = myId.substring(0,8);
    return  idSubstring;
   }
   HanldeEdit(imagePath:string) {
    // if (!this.ProductFormEdit.valid) {
     
    //   return;
    // }
    let description = this.ProductFormEdit.controls['description'].value;
    let isFreeship = this.ProductFormEdit.controls['isFreeship'].value;
    let brandID = this.ProductFormEdit.controls['brandID'].value;
    let cateID = this.ProductFormEdit.controls['cateID'].value;
    let content = this.ProductFormEdit.controls['content'].value;
    let EditBy = this.ProductFormEdit.controls['EditBy'].value;
    let viewCount = this.ProductFormEdit.controls['viewCount'].value;
    let hot = this.ProductFormEdit.controls['hot'].value;
    let listImage = this.ProductFormEdit.controls['listImage'].value;
    let metaDescription = this.ProductFormEdit.controls['metaDescription'].value;
    let price = this.ProductFormEdit.controls['price'].value;
    let metaKeyword = this.ProductFormEdit.controls['metaKeyword'].value;
    let promotionPrice = this.ProductFormEdit.controls['promotionPrice'].value;
    let quantity = this.ProductFormEdit.controls['quantity'].value;
    let supplierid = this.ProductFormEdit.controls['supplierid'].value;
    let updateBy = this.ProductFormEdit.controls['updateBy'].value;
    isFreeship = this.hanldeFreeShip.value.isFreeship;

    console.log(isFreeship)
    description = this.description;
    console.log(this.ProductFormEdit.value)
    console.log(description)
    const name = this.ProductFormEdit.controls['name'].value ;
    const image = imagePath;
    const ProductForm  : TypeProductsEdit= {
      brandID,
      cateID,
      content,
      updateBy,
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
      viewCount,
      image
    }
    console.log(ProductForm)
    this.ProductService.updateProduct(this.slug,ProductForm)
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
    //console.log(this.ProductFormEdit.value)
   
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
       this.HanldeEdit( this.uploadUrl)
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
