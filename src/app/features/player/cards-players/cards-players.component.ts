import { Component } from "@angular/core";
import { Player } from "src/app/shared/models/player.interface";
import { CardsPlayersService } from "src/app/core/services/cards-players.service";

@Component({
  selector: "app-cards-players",
  templateUrl: "./cards-players.component.html",
  styleUrls: ["./cards-players.component.scss"],
})
export class CardsPlayersComponent {
  players: Player[] = [];

  constructor(public playerService: CardsPlayersService) {}

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }
}
