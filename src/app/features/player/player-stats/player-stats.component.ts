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
    private navigationService: NavigationService,
    public playerService: CardsPlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goBack() {
    this.navigationService.goBack();
  }
  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    const name = String(this.route.snapshot.paramMap.get("name"));
    this.playerService
      .getPlayer(name)
      .subscribe((player) => (this.player = player));
  }

  goToPlayerVideos() {
    this.router.navigate(["/player-videos", this.player.name]);
  }
}
