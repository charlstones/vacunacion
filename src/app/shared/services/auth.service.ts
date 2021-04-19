import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { LoggedUserService } from './logged-user.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private loggedUserService: LoggedUserService) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {

        if (!this.loggedUserService.isUserLoggedIn())  {
            alert('You are not allowed to view this page');
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
