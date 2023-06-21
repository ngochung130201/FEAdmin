import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(public dialog: MatDialog, private UserService: UserService,private toast: NgToastService) { }

  ngOnInit(): void {
    this.handleGetUser();
  }
  getUser: Array<any> = [];
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }

  handleGetUser() {
    this.UserService.getAllUser().subscribe(data => {
      this.getUser = data;
      return this.getUser;
    })
  }
  handleDelete(id : any) {
   
  
    this.UserService.deleteUser(id).subscribe(
      {
        next: (data => {
          this.handleGetUser()
          this.toast.success({detail:"Thành công ",summary:"Xóa thương hiệu",duration:5000});
        }),
        error: (err => {
          this.toast.error({detail:"Thất bại ",summary:`${err.error.Message}`,duration:5000});
        })
      }
    )
  }
  data : any = {
    brandID : 0,
    brandName:""
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>,brandID:any,brandName:string) {
    this.dialog.open(templateRef,{
      data: {
        brandID,
        brandName
      }
      
    });
  }
}
