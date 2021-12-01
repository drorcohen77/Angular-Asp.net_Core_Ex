import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class MainInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next:HttpHandler)  {
        
        const modifiedReq = req.clone({
            headers: req.headers.append('Authorization', '1234')
        });
        return next.handle(modifiedReq);
    };
};