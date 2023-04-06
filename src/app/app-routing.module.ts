import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardsPlayersComponent } from "../app/features/player/cards-players/cards-players.component";
import { PlayerCareerComponent } from "../app/features/player/player-career/player-career.component";
import { PlayerStatsComponent } from "../app/features/player/player-stats/player-stats.component";
import { PlayerVideosComponent } from "../app/features/player/player-videos/player-videos.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "",
    },
    children: [
      {
        path: "",
        data: {
          breadcrumb: null,
        },
        component: CardsPlayersComponent,
      },
      {
        path: "player-stats/:id",
        data: {
          breadcrumb: "Estadísticas",
        },
        children: [
          {
            path: "",
            data: {
              breadcrumb: null,
            },
            component: PlayerStatsComponent,
          },
          {
            path: "player-videos/:id",
            data: {
              breadcrumb: "Videos",
            },
            children: [
              {
                path: "",
                data: {
                  breadcrumb: null,
                },
                component: PlayerVideosComponent,
              },
              {
                path: "player-career/:id",
                data: {
                  breadcrumb: "Trayectoria",
                },
                component: PlayerCareerComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
