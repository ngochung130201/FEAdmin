import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.scss']
})
export class DetailContactComponent {
   
  constructor(private router: Router,private _routerAc : ActivatedRoute,private http : HttpClient,private contactService : ContactService) { }
  ContactDetail: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email : new  FormControl('', Validators.required),
    phone : new  FormControl('', Validators.required),
    address : new  FormControl('', Validators.required),
    subject : new  FormControl('', Validators.required),
    body : new  FormControl('', Validators.required),
    createDate : new  FormControl('', Validators.required),
  })
  id = 0
  disabled: boolean = true;
  ngOnInit(): void {
    this.id = this._routerAc.snapshot.params['contactId'];
    console.log(this.id)
    this.contactService.getContact(this.id).subscribe({
      next: (res => {
        console.log(res)
        this.ContactDetail = new FormGroup({
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
