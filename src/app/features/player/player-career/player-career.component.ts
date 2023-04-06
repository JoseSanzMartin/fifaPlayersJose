import { Component } from "@angular/core";
import { Player } from "src/app/shared/models/player.interface";
import { CardsPlayersService } from "src/app/core/services/cards-players.service";
import { NavigationService } from "src/app/core/services/navigation-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-player-career",
  templateUrl: "./player-career.component.html",
  styleUrls: ["./player-career.component.scss"],
})
export class PlayerCareerComponent {
  player: Player = {} as Player;

  constructor(
    public navigation: NavigationService,
    private playerService: CardsPlayersService,
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
}
