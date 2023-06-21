import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { HeaderComponent } from 'src/app/Layouts/header/header.component';
import { SharedService } from 'src/app/Services/shared.service';
import { UserService } from 'src/app/Services/user.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  /**
   *
   */
  constructor(private userService: UserService,
     private appComponent: AppComponent,
     private toast:NgToastService,
     private sharedService: SharedService
     ) {

  }
  email!: string;
  password!: string;
  rememberMe: boolean = false;

  onSubmit() {
    // Xử lý khi form được submit
    console.log('Email:', this.email);
    console.log('Mật khẩu:', this.password);
    console.log('Nhớ mật khẩu lần sau:', this.rememberMe);
  this.userService.login(this.email,this.password).subscribe({
    next:(res:any)=>{
      console.log(res.token);
      
      const token = res.token;
      let expirationDate: number;

        if (this.rememberMe) {
          expirationDate = new Date().getTime() + 2 * 60 * 60 * 1000; // Tính thời gian hết hạn sau 2 tiếng
        } else {
          expirationDate = new Date().getTime() + 30 * 60 * 1000; // Tính thời gian hết hạn sau 30 phút
        }

        // Lưu token và thời gian hết hạn vào localStorage hoặc sessionStorage
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('expirationDate', expirationDate.toString());
        this.sharedService.setEmail(this.email);
      this.appComponent.login();
    },
    error:(err:any)=>{
      this.appComponent.logout();
      console.log(err.error.Message);
      this.toast.error({detail:"Thất bại ",summary:`Đăng nhập thất bại`,duration:5000});
    }
  })
  }
}
