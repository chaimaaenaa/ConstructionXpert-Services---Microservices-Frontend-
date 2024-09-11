import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth'; // Change the URL as needed

  constructor(private http: HttpClient) { }

  // Method to check if the user is an admin
  isAdmin(): boolean {
    // Assuming you have a way to check if the user is an admin
    const role = localStorage.getItem('userRole'); // Or you can fetch it from a token
    return role === 'ADMIN';
  }

  // Method to get the number of users from the backend
  getUserCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/users/count`);
  }
}
