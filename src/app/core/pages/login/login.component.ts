import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/http/user.service';
import { User } from 'src/app/shared/models/user';
import { LoggedUserService } from 'src/app/shared/services/logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public user = new User();
public error = false;
  constructor(private userService: UserService, private loggedUser: LoggedUserService, private router: Router) { }
  ngOnInit() {
  }
  login(user: User) {
    try {
    this.userService.login(user).subscribe((userLogged: User) => {
      this.loggedUser.user = userLogged;
      this.router.navigate(['/admin']);
    });
    } catch (error) {
      this.error = !this.error;
    }
  }
}
