import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/Services/supplier.service';
import { TySupplier } from 'src/app/Types/supplier';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.scss']
})
export class AddSuppliersComponent {
  constructor(private router: Router, private SupplierService: SupplierService,private http : HttpClient) { }
  supplierFormCreate: FormGroup = new FormGroup({
    supplierName: new FormControl('', Validators.required),
    phone : new  FormControl('', Validators.required),
    email : new  FormControl('', Validators.required),
    address : new  FormControl('', Validators.required),
  })
  
  HandleAdd(){
    this.SupplierService.createSupplier(this.supplierFormCreate.value).subscribe({
      next:(res=>{
        this.router.navigate(['/Supplier'])
      }),
      error:(err=>{
        console.log(err)
      })
      
    })
  }
}
