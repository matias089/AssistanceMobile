import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  login(username: string, password: string) {
    // Perform actual authentication here, check username and password
    // If authentication is successful, set isLoggedIn to true
    // You should not store passwords in plain text like this
    if (username === 'validUsername' && password === 'validPassword') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}