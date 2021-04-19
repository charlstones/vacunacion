import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  apiRoot = `${environment.apiUrl}/users`;

  login(user) {
    const endPoint = `${this.apiRoot}/login`;
    return this.http.post(endPoint, user);
  }

  getRole(userId) {
    const endPoint = `${this.apiRoot}/:id`;
    return this.http.get(endPoint);
  }
}
