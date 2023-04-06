import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { delay } from "rxjs";

@Injectable()
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router, private location: Location) {}

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public goBack(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.router.navigateByUrl(this.history.pop()!);
    } else {
      this.router.navigateByUrl("/");
    }
  }

  public async syncWithBreadcrumb() {
    await delay(50);
    const currentUrl = this.router.url;
    this.history.pop();
    while (
      this.history[this.history.length - 1] != currentUrl &&
      this.history.length > 0
    ) {
      this.history.pop();
    }
  }

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 2];
    }

    return "";
  }
}
