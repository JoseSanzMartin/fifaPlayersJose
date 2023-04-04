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
    private navigationService: NavigationService,
    private sanitizer: DomSanitizer,
    private playerService: CardsPlayersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  goBack() {
    this.navigationService.goBack();
  }

  getPlayer(): void {
    const name = String(this.route.snapshot.paramMap.get("name"));
    this.playerService
      .getPlayer(name)
      .subscribe((player) => (this.player = player));
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  goToPlayerCareer() {
    this.router.navigate(["/player-career", this.player.name]);
  }
}
