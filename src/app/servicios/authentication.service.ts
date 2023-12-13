import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private userInfo = new BehaviorSubject<any>(null);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get getUserInfo(): Observable<any> {
    return this.userInfo.asObservable();
  }

  constructor(private storage: Storage) {}

  login(username: string, password: string): Observable<boolean> {
    // Check if username and password are not empty and have more than 8 characters
    if (username.trim() !== '' && password.trim() !== '' && username.length > 8 && password.length > 8) {
      // Mocking user data for demonstration purposes
      const user = {
        username: username,
        // Add other user data if needed
      };

      this.loggedIn.next(true);
      this.userInfo.next(user);

      // Save user information in Ionic Storage
      this.storage.set('userData', user);

      return of(true); // Indicate successful login
    }

    return of(false); // Indicate failed login
  }

  logout() {
    this.loggedIn.next(false);
    this.userInfo.next(null);
    // Remove user information from Ionic Storage on logout
    this.storage.remove('userData');
  }
}

