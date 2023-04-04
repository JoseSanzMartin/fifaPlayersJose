import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class NavigationService {
  private history: Array<{ route: string; name: string; labelKey: string }> =
    [];

  constructor(private router: Router, private location: Location) {}

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects;
        const segments = route.split("/");

        if (segments.length > 2) {
          let labelKey: string;
          switch (segments[1]) {
            case "player-stats":
              labelKey = "STATISTICS";
              break;
            case "player-videos":
              labelKey = "VIDEOS";
              break;
            case "player-career":
              labelKey = "CAREER";
              break;
            default:
              labelKey = "";
          }
          const name = decodeURIComponent(segments[2]);
          this.history.push({ route, name, labelKey });
        }
      }
    });
  }

  public getHistory(): Array<{
    route: string;
    name: string;
    labelKey: string;
  }> {
    return this.history;
  }

  public goBack(): void {
    this.history.pop();

    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2].route;
    }

    return "";
  }
}
