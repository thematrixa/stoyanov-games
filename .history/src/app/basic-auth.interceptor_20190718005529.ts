import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './shared/services/user-service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.userService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Basic ' + token
                }
            });
        }

        return next.handle(request);
    }
}