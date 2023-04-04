import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardsPlayersComponent } from "../app/features/player/cards-players/cards-players.component";
import { PlayerCareerComponent } from "../app/features/player/player-career/player-career.component";
import { PlayerStatsComponent } from "../app/features/player/player-stats/player-stats.component";
import { PlayerVideosComponent } from "../app/features/player/player-videos/player-videos.component";

const routes: Routes = [
  { path: "", redirectTo: "cards-players", pathMatch: "full" },
  { path: "cards-players", component: CardsPlayersComponent },
  { path: "player-stats/:name", component: PlayerStatsComponent },
  { path: "player-videos/:name", component: PlayerVideosComponent },
  { path: "player-career/:name", component: PlayerCareerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
