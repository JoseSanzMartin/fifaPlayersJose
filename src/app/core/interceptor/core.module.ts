import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpErrorInterceptor } from "./error.interceptor";
import { NotFoundComponent } from "../components/not-found/not-found.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [HttpClientModule, CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
