import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Interceptor");
        // Clone the request to add the new header

        const clonedRequest = req.clone({
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': 'http://localhost:5050',
                'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,DELETE',
                'Access-Control-Allow-Credentials': 'false',
                'Access-Control-Max-Age': '3600',
                'Access-Control-Allow-Headers': 'access-control-allow-credentials,access-control-allow-methods,access-control-allow-origin,access-control-max-age,content-type'
            })
        });
        console.log('modified request', clonedRequest);

        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    }
}