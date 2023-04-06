import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FooterJoseVModule } from "footer-jose-v";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { CardsPlayersComponent } from "./features/player/cards-players/cards-players.component";
import { PlayerStatsComponent } from "./features/player/player-stats/player-stats.component";
import { PlayerVideosComponent } from "./features/player/player-videos/player-videos.component";
import { PlayerCareerComponent } from "./features/player/player-career/player-career.component";
import { NavigationService } from "./core/services/navigation-service.service";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { CoreModule } from "./core/interceptor/core.module";
import { BreadcrumbComponent } from "./core/components/breadcrumbs/breadcrumbs.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CardsPlayersComponent,
    PlayerStatsComponent,
    PlayerVideosComponent,
    PlayerCareerComponent,
    NavbarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    FooterJoseVModule,
    HttpClientModule,
    BreadcrumbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
