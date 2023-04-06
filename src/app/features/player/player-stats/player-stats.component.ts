import { Component } from "@angular/core";
import { Player } from "src/app/shared/models/player.interface";
import { CardsPlayersService } from "src/app/core/services/cards-players.service";
import { NavigationService } from "src/app/core/services/navigation-service.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-player-stats",
  templateUrl: "./player-stats.component.html",
  styleUrls: ["./player-stats.component.scss"],
})
export class PlayerStatsComponent {
  player: Player = {} as Player;
  constructor(
    public navigation: NavigationService,
    public playerService: CardsPlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.playerService
      .getPlayer(Number(id))
      .subscribe((player) => (this.player = player));
  }

  goToPlayerVideos() {
    this.router.navigate(["./player-videos", this.player.id], {
      relativeTo: this.route,
    });
  }
}
