type TyUser= {
    UserID: string;
    UserName: string;
  }
interface ChangePassword  {
  
    email: string,
    password: string,
    newPassword: string,
    confirmNewPassword: string
  
}
export {
    TyUser,
    ChangePassword
    
}  