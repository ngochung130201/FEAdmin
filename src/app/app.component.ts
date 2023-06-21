import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FEAdmin';
  isLoggedIn: boolean = false;
  rememberMe: boolean = false;
  /**
   *
   */
  constructor(private userService: UserService) {
  
    
  }
  ngOnInit() {
    // Kiểm tra xem token có tồn tại và chưa hết hạn hay không
    const token = sessionStorage.getItem('token');
    const expirationDate = sessionStorage.getItem('expirationDate');

    if (token && expirationDate) {
      const currentTime = new Date().getTime();
      if (currentTime < Number(expirationDate)) {
        this.isLoggedIn = true;

        if (!this.rememberMe) {
          // Đặt thời gian hết hạn cho token (30 phút sau khi đăng nhập)
          const expirationTime = Number(expirationDate) - currentTime;
          setTimeout(() => {
            // Token đã hết hạn, xóa token khỏi bộ nhớ và đăng xuất người dùng
            this.logout();
          }, expirationTime);
        }
      } else {
        // Token đã hết hạn, xóa token khỏi bộ nhớ và đăng xuất người dùng
        this.logout();
      }
    }
  }
  // Example login logic
  login() {
    // Perform login process and set isLoggedIn to true upon successful login
    // You can use authentication service or other methods to handle the login process
    // For simplicity, this example sets isLoggedIn to true directly
    this.isLoggedIn = true;
  }

  // Example logout logic
  logout() {
    // Perform logout process and set isLoggedIn to false upon successful logout
    // You can use authentication service or other methods to handle the logout process
    // For simplicity, this example sets isLoggedIn to false directly
    this.isLoggedIn = false;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expirationDate');
  }
}
