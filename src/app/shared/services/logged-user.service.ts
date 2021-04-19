import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService {
  constructor() { }

  user: User;

  public isUserLoggedIn() {
    return this.user ? true : false;
  }

}
