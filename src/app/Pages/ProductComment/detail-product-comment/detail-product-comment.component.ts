import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCommentcommentService } from 'src/app/Services/productcomment.service';


@Component({
  selector: 'app-detail-product-comment',
  templateUrl: './detail-product-comment.component.html',
  styleUrls: ['./detail-product-comment.component.scss']
})
export class DetailProductCommentComponent {
  constructor(private router: Router,private _routerAc : ActivatedRoute,private http : HttpClient,private productCommentService : ProductCommentcommentService) { }
  productCommentDetail: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email : new  FormControl('', Validators.required),
    productName : new  FormControl('', Validators.required),
    detail : new  FormControl('', Validators.required),
    createDate : new  FormControl('', Validators.required),
  })
  slug = ''
  disabled: boolean = true;
  ngOnInit(): void {
    this.slug = this._routerAc.snapshot.params['commentID'];
    console.log(this.slug)
    this.productCommentService.getProductComment(this.slug).subscribe({
      next: (res => {
        console.log(res)
        this.productCommentDetail = new FormGroup({
          name: new FormControl({value:res.customer.fullName,disabled: this.disabled}),
          productName: new FormControl({value:res.product.name,disabled: this.disabled}),
          email : new  FormControl({value:res.email,disabled:this.disabled}),
          detail : new  FormControl({value:res.detail,disabled:this.disabled}),
          createDate : new  FormControl({value:res.createDate,disabled:this.disabled}),
        
        })
        
      }),
      error: (err => {
        console.log(err);
      })
    })
    
  
  }
}
