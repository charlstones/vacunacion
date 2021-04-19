import { Component } from '@angular/core';
import { LoggedUserService } from './shared/services/logged-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vacunacion-project';
  constructor(private loggedUser: LoggedUserService) {}
}
