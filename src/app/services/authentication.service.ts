import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users = JSON.parse(localStorage.getItem('users') || '[]');
  private currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

  register(username: string, password: string, email: string) {
    if (this.users.find((user:any) => user.username === username)) {
      return throwError(new Error('Username already exists.'));
    }

    const newUser = { username, password, email, profilePicture: '' };
    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return of(newUser);
  }

  login(username: string, password: string) {
    const user = this.users.find((user:any) => user.username === username && user.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return of(user);
    } else {
      return throwError(new Error('Invalid credentials.'));
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
