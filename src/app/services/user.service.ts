import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: any = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  listUsers() {
    return this.http.get<any>(this.baseUrl + 'users');
  }

  viewUser(id: string) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }
}
