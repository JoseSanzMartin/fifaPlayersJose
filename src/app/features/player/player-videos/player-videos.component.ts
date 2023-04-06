import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { NavigationService } from "src/app/core/services/navigation-service.service";
import { Player } from "src/app/shared/models/player.interface";
import { CardsPlayersService } from "src/app/core/services/cards-players.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-player-videos",
  templateUrl: "./player-videos.component.html",
  styleUrls: ["./player-videos.component.scss"],
})
export class PlayerVideosComponent {
  player: Player = {} as Player;

  constructor(
    public navigation: NavigationService,
    private sanitizer: DomSanitizer,
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
      .getPlayer(id)
      .subscribe((player) => (this.player = player));
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goToPlayerCareer() {
    this.router.navigate(["./player-career", this.player.id], {
      relativeTo: this.route,
    });
  }
}
