import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FooterJoseVModule } from "footer-jose-v";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FooterJoseVModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
