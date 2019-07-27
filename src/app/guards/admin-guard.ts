
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared/services/user-service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

    constructor(private router: Router,
        private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.userService.getLoggedUser().isAdmin) {
            return true;
        }
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}