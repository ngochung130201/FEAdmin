import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent {
  
  constructor(private router: Router,private _routerAc : ActivatedRoute,private http : HttpClient,private orderService : OrderService) { }
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
    
   // console.log(this.orderId)
    this.orderService.getOrderById(this.orderId).subscribe({
      next: (res => {
        console.log(res)
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
    
  
  }
}
