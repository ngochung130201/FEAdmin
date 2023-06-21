

/// <reference types="@types/ckeditor" />
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpEventType, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output,ViewChild } from '@angular/core';
import { environment } from 'src/app/Global/environment';
import * as uuid from 'uuid';
import { BrandService } from 'src/app/Services/brand.service';
import { TyBrand } from 'src/app/Types/brand';
import { SupplierService } from 'src/app/Services/supplier.service';
import { TySupplier } from 'src/app/Types/supplier';
declare var CKEDITOR: any;
import { CKEditorComponent } from 'ng2-ckeditor';
import { MessageService } from 'primeng/api';
import { PostcategoryService } from 'src/app/Services/postcategory.service';
import { PostService } from 'src/app/Services/post.service';
import { TypePostCategory, TypePostCreate } from 'src/app/Types/post';
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
  providers: [MessageService]
})
export class EditBlogComponent {
  constructor(
    private messageService: MessageService,
    private _routerAc : ActivatedRoute, private supplierService : SupplierService,private _formBuilder: FormBuilder,private PostCategoryService : PostcategoryService, private brandService : BrandService,private router: Router, private PostService: PostService,private http : HttpClient) { }
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
   this.getPostCategory()
   this.slug = this._routerAc.snapshot.params['slug'];
   this.getPost(this.slug)
  
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
  PostFormEdit: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image : new  FormControl('', Validators.required),
    content : new  FormControl('', Validators.required),
    description : new  FormControl('', Validators.required),
    viewCount : new  FormControl(0, Validators.required),
    metaKeyword : new  FormControl('', Validators.required),
    metaDescription : new  FormControl('', Validators.required),
    createBy : new  FormControl(0, Validators.required),
    updateBy : new  FormControl(0, Validators.required),
    cateID : new  FormControl('', Validators.required),
  
  })

  getPost(slug:string){
    this.PostService.getpost(slug).subscribe({
      next:(res=>{
         this.description = res.description
        this.PostFormEdit = new FormGroup({
          name: new FormControl(res.name),
          image : new  FormControl(res.image),
          hot : new FormControl<Date | null>(null),
          content : new  FormControl(res.content),
          description : new  FormControl(res.description),
          viewCount : new  FormControl(res.viewCount),
          metaKeyword : new  FormControl(res.metaKeyword),
          metaDescription : new  FormControl(res.metaDescription),
          createBy : new  FormControl(res.createBy),
          updateBy : new  FormControl(res.updateBy),
          cateID : new  FormControl(res.cateID),
  
        
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
    // if (!this.PostFormEdit.valid) {
     
    //   return;
    // }
    let description = this.PostFormEdit.controls['description'].value;

    let cateID = this.PostFormEdit.controls['cateID'].value;
    let content = this.PostFormEdit.controls['content'].value;
    let createBy = this.PostFormEdit.controls['createBy'].value;
    let viewCount = this.PostFormEdit.controls['viewCount'].value;
    let metaDescription = this.PostFormEdit.controls['metaDescription'].value;
    let metaKeyword = this.PostFormEdit.controls['metaKeyword'].value;
    let updateBy = this.PostFormEdit.controls['updateBy'].value;

    description = this.description;
    console.log(this.PostFormEdit.value)
    console.log(description)
    const name = this.PostFormEdit.controls['name'].value ;
    const image = imagePath;
    const PostForm  : TypePostCreate= {
      cateID,
      content,
      updateBy,
      description,
      metaDescription,
      metaKeyword,
      name,
      viewCount,
      image,
      createBy: 0
    }
    console.log(PostForm)
    this.PostService.updatepost(this.slug,PostForm)
      .subscribe(
        item => {
          console.log(item)
          this.router.navigate(['/Blog']);
        },
        err => {
          console.log(err);
         
        }
      );
  }
  listBrand : Array<TyBrand> = []
  listPostCategory : Array<TypePostCategory> = []
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
 getPostCategory(){
  this.PostCategoryService.getAllPostCategory().subscribe(res=>{
    this.listPostCategory = res;
    console.log(res)
    return this.listPostCategory;
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
    //console.log(this.PostFormEdit.value)
   
    if (!this.uploadFile) {
      alert('Choose a file to upload first');
      return;
    }
    const uuid = this.handleGenerationId();
    const formData = new FormData();
    formData.append(this.uploadFile.name, this.uploadFile);

    const url = `${environment.apiUrl}/UploadFile?folder=Post&genId=${uuid}`;
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
