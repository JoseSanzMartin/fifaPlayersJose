import { Injectable } from "@angular/core";
import { Player } from "../../shared/models/player.interface";
import { Observable, of } from "rxjs";
import { playersData } from "src/app/shared/data";

@Injectable({
  providedIn: "root",
})
export class CardsPlayersService {
  private players: Player[] = playersData;

  getPlayers(): Player[] {
    return this.players;
  }
  getPlayer(id: number): Observable<Player> {
    const player = this.players.find((h) => h.id === id)!;
    return of(player);
  }
}
