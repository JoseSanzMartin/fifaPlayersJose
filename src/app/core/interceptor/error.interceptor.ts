import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { Router } from "@angular/router";
import { Observable, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status == 404) {
          this.router.navigateByUrl("/not-found", { replaceUrl: true });
          return EMPTY;
        } else return throwError(error);
      })
    );
  }
}
