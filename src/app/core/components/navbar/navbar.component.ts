import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { NavigationService } from "src/app/core/services/navigation-service.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  constructor(
    public navigation: NavigationService,
    private translate: TranslateService,
    private router: Router
  ) {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    const browserLanguage = translate.getBrowserLang();

    if (savedLanguage) {
      translate.setDefaultLang(savedLanguage);
      translate.use(savedLanguage);
    } else if (browserLanguage) {
      translate.setDefaultLang(browserLanguage);
      translate.use(browserLanguage);
    } else {
      translate.setDefaultLang("es");
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("selectedLanguage", language);
  }

  navigateTo(url: string, event: MouseEvent): void {
    event.preventDefault();
    this.router.navigateByUrl(url);
  }
}
