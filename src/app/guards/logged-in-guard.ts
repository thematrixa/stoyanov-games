
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared/services/user-service';

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router,
        private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.userService.resumeLogin();
        if (this.userService.getToken()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}