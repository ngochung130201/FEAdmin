import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostcategoryService } from 'src/app/Services/postcategory.service';


@Component({
  selector: 'app-edit-blog-category',
  templateUrl: './edit-blog-category.component.html',
  styleUrls: ['./edit-blog-category.component.scss']
})
export class EditBlogCategoryComponent {
  constructor(private router: Router,private _routerAc : ActivatedRoute, private blogCategoryService: PostcategoryService,private http : HttpClient) { }
  blogCategoryFormEdit: FormGroup = new FormGroup({
    postCateName: new FormControl('', Validators.required),
    sort : new  FormControl('', Validators.required),
    parentID : new  FormControl('', Validators.required),
    metaKeyword : new  FormControl('', Validators.required),
    metaDescription : new  FormControl('', Validators.required),
  })
  slug = ""
  ngOnInit(): void {
    this.slug = this._routerAc.snapshot.params['slug'];
    console.log(this.slug)
    
    this.blogCategoryService.getPostCategory(this.slug).subscribe({
      next: (res => {
        console.log(res)
        this.blogCategoryFormEdit = new FormGroup({
          postCateName: new FormControl(res.postCateName),
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
    this.blogCategoryService.updatePostCategory(this.slug,this.blogCategoryFormEdit.value).subscribe({
      next:(res=>{
        this.router.navigate(['/BlogCategory'])
      }),
      error:(err=>{
        console.log(err)
      })
      
    })
  }
}
