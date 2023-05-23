import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    console.log(user)
    return this.http.post<User>(this.apiUrl, user);
  }

  getUserByEmail(email: string) {
    return this.http.get<User>(`/api/users/${email}`);
  }
}
