import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/Services/supplier.service';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.scss']
})
export class EditSuppliersComponent {
  
  constructor(private router: Router,private _routerAc: ActivatedRoute, private SupplierService: SupplierService,private http : HttpClient) { }
  supplierID: number  = 0;
 
  ngOnInit(): void {
    this.supplierID = this._routerAc.snapshot.params['id'];
    console.log(this.supplierID)
    
    this.SupplierService.getSupplier(this.supplierID).subscribe({
      next: (res => {
        console.log(res)
        this.supplierFormEdit = new FormGroup({
          supplierName: new FormControl(res.supplierName),
          phone : new  FormControl(res.phone),
          email : new  FormControl(res.email),
          address : new  FormControl(res.address),
        
        })
        
      }),
      error: (err => {
        console.log(err);
      })
    })
    
  
  }
  
  supplierFormEdit: FormGroup = new FormGroup({
    supplierName: new FormControl('', Validators.required),
    phone : new  FormControl('', Validators.required),
    email : new  FormControl('', Validators.required),
    address : new  FormControl('', Validators.required),
  })
  
  HandleAdd(){
    this.SupplierService.updateSupplier(this.supplierID,this.supplierFormEdit.value).subscribe({
      next:(res=>{
        this.router.navigate(['/Supplier'])
      }),
      error:(err=>{
        console.log(err)
      })
      
    })
  }
}
