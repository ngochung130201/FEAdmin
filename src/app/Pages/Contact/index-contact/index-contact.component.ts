import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';


import { ModalComponent } from 'src/app/Layouts/modal/modal.component';
import { ContactService } from 'src/app/Services/contact.service';
import { TypeContact, TypeContactDelete } from 'src/app/Types/contact';


@Component({
  selector: 'app-index-contact',
  templateUrl: './index-contact.component.html',
  styleUrls: ['./index-contact.component.scss']
})
export class IndexContactComponent {
  modalService: any;

  ngOnInit(): void {
    this.handleGetContact();

  }


  constructor(public dialog: MatDialog,private ContactService: ContactService,private toast: NgToastService) {}
  getContacts: Array<TypeContact> = [];

  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.name = 'World';
	}
  handleGetContact() {
    this.ContactService.getAllContact().subscribe({
      next: (item => {
        this.getContacts = item;
        console.log(item)
        return this.getContacts;
     
      }),
      error: (err) => {
        console.log(err);
       
      }
    })
  }

  handleDelete(id : any) {
   
  
    this.ContactService.deleteContact(id).subscribe(
      {
        next: (data => {
          this.handleGetContact()
          this.toast.success({detail:"Thành công ",summary:"Xóa liên hệ",duration:5000});
        }),
        error: (err => {
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
  data : any = {
    contactID : 0,
    contactName:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>,contactID:any,contactName:string) {
    this.dialog.open(templateRef,{
      data: {
        contactID,
        contactName
      }
      
    });
  }


}
