import { Component } from "@angular/core";
import { Player } from "src/app/shared/models/player.interface";
import { CardsPlayersService } from "src/app/core/services/cards-players.service";
import { NotFoundService } from "src/app/core/services/not-found.service";

@Component({
  selector: "app-cards-players",
  templateUrl: "./cards-players.component.html",
  styleUrls: ["./cards-players.component.scss"],
})
export class CardsPlayersComponent {
  players: Player[] = [];

  constructor(
    public playerService: CardsPlayersService,
    private notFoundService: NotFoundService
  ) {}

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }

  triggerNotFound() {
    this.notFoundService.triggerNotFound().subscribe({
      error: (error) => console.log("Error handled by interceptor", error),
    });
  }
}
