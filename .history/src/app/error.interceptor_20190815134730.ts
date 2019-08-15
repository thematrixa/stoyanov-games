
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from './shared/services/user-service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private userService: UserService,
        private toastrService: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 403) {
                this.userService.logout();
            }
            if (err.status === 400 && err.error.error[0]) {
                this.toastrService.error(err.error.error[0].defaultMessage);
                return throwError(err.error.error[0]);
            }
            return throwError(err.status);
        }))
    }
}