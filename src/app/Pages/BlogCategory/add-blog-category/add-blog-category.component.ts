import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostcategoryService } from 'src/app/Services/postcategory.service';


@Component({
  selector: 'app-add-blog-category',
  templateUrl: './add-blog-category.component.html',
  styleUrls: ['./add-blog-category.component.scss']
})
export class AddBlogCategoryComponent {
  constructor(private router: Router, private postCategoryService: PostcategoryService,private http : HttpClient) { }
  postCategoryFormCreate: FormGroup = new FormGroup({
    postCateName: new FormControl('', Validators.required),
    sort : new  FormControl('', Validators.required),
    parentID : new  FormControl('', Validators.required),
    metaKeyword : new  FormControl('', Validators.required),
    metaDescription : new  FormControl('', Validators.required),
  })
  
  HandleAdd(){
    this.postCategoryService.createPostCategory(this.postCategoryFormCreate.value).subscribe({
      next:(res=>{
        this.router.navigate(['/BlogCategory'])
      }),
      error:(err=>{
        console.log(err)
      })
      
    })
  }
}
