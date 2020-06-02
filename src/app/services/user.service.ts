import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  doRegister(user) {
    return this.http.post(`${this.url}/user`, user, {
      responseType: 'text' as 'json',
    });
  }

  getAllUser() {
    return this.http.get(`${this.url}/user`);
  }

  getByUserName(username) {
    return this.http.get(`${this.url}/user/${username}`);
  }

  deleteById(id) {
    return this.http.delete(`${this.url}/user/${id}`);
  }
}
