import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './shared/services/user-service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request.url);
        let token = this.userService.getToken();
        if (token) {
            if(!this.isBanListUrl(request.url)){    
                request = request.clone({
                    setHeaders: {
                        Authorization: 'Basic ' + token
                    }
                }); 
            }
        }

        return next.handle(request);
    }

    isBanListUrl(url){
        if(url==="https://db.ygoprodeck.com/api/v4/cardinfo.php?banlist=TCG"){
            return true;
        }else{
            return false;
        }
    }
}