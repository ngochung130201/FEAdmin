import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SharedService } from 'src/app/Services/shared.service';
import { UserService } from 'src/app/Services/user.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visible: boolean | undefined;

  position!: string;

  showDialog(position: string) {
      this.position = position;
      this.visible = true;
  }
  minDate: Date;
  maxDate: Date;
  email!: string | null;
  constructor( private appComponent: AppComponent,private sharedService: SharedService,
    private userServices: UserService,
    private toast : NgToastService
    ) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  ngOnInit() {
    // Get the email from the shared service
    this.email = this.sharedService.getEmail();
    this.getInfoUser();
  }

  getEmailLabel(): string {
    return this.email?.length ? this.email : 'N/A';
  }
  Logout() {
    this.appComponent.logout();
  }
  firstName : string = '';
  lastName : string = '';
  phoneNumber: number = 0;
  birthday : Date = new Date();
  dateCreated : Date = new Date();
  emailRes : string = '';
  getInfoUser(){
    const email = this.getEmailLabel();
    this.userServices.getUserWithEmail(email).subscribe((res: any) => {
      console.log(res);
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      this.phoneNumber = res.phoneNumber;
      this.birthday = res.birthday;
      this.dateCreated = res.dateCreated;
      this.emailRes = res.email;
    });
  }
visible2: boolean | undefined;
position2!: string;
currentPassword: string = '';
newPassword: string = '';
confirmPassword: string = '';

showDialog2(position: string) {
  this.position2 = position;
  this.visible2 = true;
}

updatePassword() {
  // Kiểm tra mật khẩu hiện tại, mật khẩu mới và xác nhận mật khẩu mới
  if (this.currentPassword === '') {
    // Xử lý khi không có mật khẩu hiện tại
    this.toast.error({detail:'Thất bại', summary: 'Mật khẩu hiện tại không được để trống'});
    return;
  }
  
  if (this.newPassword === '') {
    // Xử lý khi không có mật khẩu mới
    this.toast.error({detail:'Thất bại', summary: 'Mật khẩu mới không được để trống'});
    return;
  }
  
  if (this.newPassword !== this.confirmPassword) {
    // Xử lý khi mật khẩu mới và xác nhận mật khẩu mới không khớp
    this.toast.error({detail:'Thất bại', summary: 'Mật khẩu mới và xác nhận mật khẩu mới không khớp'});
    return;
  }
  
  // Thực hiện cập nhật mật khẩu
  // ...
  const changePassword  = {
    email :  this.emailRes,
    password : this.currentPassword,
    newPassword : this.newPassword,
    confirmNewPassword : this.confirmPassword
  }
  this.userServices.changePasswordAsync(changePassword).subscribe({
    next: (res) => {
      this.toast.success({detail:'Thành công', summary: 'Đổi mật khẩu thành công'});
      console.log(res);
    },
    error:(err)=>{
      this.toast.error({detail:'Thất bại', summary: 'Đổi mật khẩu thất bại'});
      console.log(err);
    }
  })
  
  // Đóng dialog và reset giá trị các trường
  this.visible2 = false;
  this.currentPassword = '';
  this.newPassword = '';
  this.confirmPassword = '';
}
updateInfo(){
  const lastName = this.lastName;
  const firstName = this.firstName;
  const phoneNumber = this.phoneNumber;
  const birthday = this.birthday;
console.log(lastName,firstName,phoneNumber,birthday);
const data = {
  lastName,
  firstName,
  phoneNumber,
  birthday
}
console.log(data);
 this.userServices.updateInfoAsync(this.emailRes,data).subscribe({
  next: (res) => {
    console.log(res);
    this.toast.success({detail:'Thành công', summary: 'Cập nhật thông tin thành công'});
  },
  error:(err)=>{
    console.log(err);
    this.toast.error({detail:'Thất bại', summary: 'Cập nhật thông tin thất bại'});
  }
 })
  this.visible = false;
}
}
