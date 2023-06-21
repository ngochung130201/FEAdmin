import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private emailKey = 'email';

  setEmail(email: string) {
    sessionStorage.setItem(this.emailKey, email);
  }

  getEmail(): string | null {
    return sessionStorage.getItem(this.emailKey);
  }
}
