import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";

export class MainInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next:HttpHandler) {
        
        const modifiedReq = req.clone({
            headers: req.headers.set('Token', '1234')
        });
        return next.handle(modifiedReq);
    };
};