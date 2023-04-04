import { Injectable } from "@angular/core";
import { Player } from "../../shared/models/player.interface";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CardsPlayersService {
  private players: Player[] = [
    {
      id: 1,
      name: "Harry Kane",
      image: "../assets/images/kane.jpg",
      image2: "../assets/images/kanecard.png",
      position: "DC",
      overall_rating: 89,
      pace: 68,
      shooting: 91,
      passing: 83,
      dribbling: 82,
      defence: 47,
      physical: 82,
      age: 29,
      nationality: "England",
      video1: "https://www.youtube.com/embed/RL6J1-vq1r4",
      video2: "https://www.youtube.com/embed/gCWIzerWVk4",
      video3: "https://www.youtube.com/embed/-qw69sBofKI",
      video4: "https://www.youtube.com/embed/yGs_-Mrj1SY",
      seasons: [
        {
          year: "11/12",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "12/13",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "13/14",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "14/15",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "15/16",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "16/17",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "17/18",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "18/19",
          club: {
            name: "Tottenham Hotspur F. C..",
            logo: "tottenham.png",
          },
        },
        {
          year: "19/20",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "20/21",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "21/22",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
        {
          year: "22/23",
          club: {
            name: "Tottenham Hotspur F. C.",
            logo: "tottenham.png",
          },
        },
      ],
    },
    {
      id: 2,
      name: "Mohamed Salah",
      image: "../assets/images/salah.jpg",
      image2: "../assets/images/salahcard.png",
      position: "RW",
      overall_rating: 90,
      pace: 90,
      shooting: 89,
      passing: 82,
      dribbling: 90,
      defence: 45,
      physical: 75,
      age: 30,
      nationality: "Egypt",
      video1: "https://www.youtube.com/embed/wpgZUQtYlkY",
      video2: "https://www.youtube.com/embed/lfEnsErFD8o",
      video3: "https://www.youtube.com/embed/Ib6YXRrqPgQ",
      video4: "https://www.youtube.com/embed/kvknqnZQCfI",
      seasons: [
        {
          year: "12/13",
          club: {
            name: "F. C. Basel",
            logo: "basel.png",
          },
        },
        {
          year: "13/14",
          club: {
            name: "F. C. Basel",
            logo: "basel.png",
          },
        },
        {
          year: "14/15",
          club: {
            name: "Chelsea F. C.",
            logo: "chelsea.jpg",
          },
        },
        {
          year: "14/15",
          club: {
            name: "ACF Fiorentina",
            logo: "fiorentina.jpg",
          },
        },
        {
          year: "15/16",
          club: {
            name: "A. S. Roma",
            logo: "roma.png",
          },
        },
        {
          year: "16/17",
          club: {
            name: "A. S. Roma",
            logo: "roma.png",
          },
        },
        {
          year: "17/18",
          club: {
            name: "Liverpool F. C.",
            logo: "liverpool.png",
          },
        },
        {
          year: "18/19",
          club: {
            name: "Liverpool F. C.",
            logo: "liverpool.png",
          },
        },
        {
          year: "19/20",
          club: {
            name: "Liverpool F. C.",
            logo: "liverpool.png",
          },
        },
        {
          year: "20/21",
          club: {
            name: "Liverpool F. C.",
            logo: "liverpool.png",
          },
        },
        {
          year: "21/22",
          club: {
            name: "Liverpool F. C.",
            logo: "liverpool.png",
          },
        },
        {
          year: "22/23",
          club: {
            name: "Liverpool F. C.",
            logo: "liverpool.png",
          },
        },
      ],
    },
    {
      id: 3,
      name: "Erling Haaland",
      image: "../assets/images/haaland.jpg",
      image2: "../assets/images/haaland.png",
      position: "ST",
      overall_rating: 88,
      pace: 89,
      shooting: 91,
      passing: 65,
      dribbling: 80,
      defence: 49,
      physical: 87,
      age: 22,
      nationality: "Norway",
      video1: "https://www.youtube.com/embed/jyNw8lsTCF4",
      video2: "https://www.youtube.com/embed/ZIjx9rg37Ik",
      video3: "https://www.youtube.com/embed/QbV9HRPn_Pg",
      video4: "https://www.youtube.com/embed/aGaXNcxpTr8",
      seasons: [
        {
          year: "17/18",
          club: {
            name: "Molde F. K.",
            logo: "molde.png",
          },
        },
        {
          year: "18/19",
          club: {
            name: "F. C. Red Bull Salzburgo",
            logo: "redbull.png",
          },
        },
        {
          year: "19/20",
          club: {
            name: "F. C. Red Bull Salzburgo",
            logo: "redbull.png",
          },
        },
        {
          year: "20/21",
          club: {
            name: "Borussia Dortmund",
            logo: "borussia.png",
          },
        },
        {
          year: "21/22",
          club: {
            name: "Borussia Dortmund",
            logo: "borussia.png",
          },
        },
        {
          year: "22/23",
          club: {
            name: "Manchester City F. C.",
            logo: "city.png",
          },
        },
      ],
    },
    {
      id: 4,
      name: "Kylian Mbappe",
      image: "../assets/images/mbappe.jpg",
      image2: "../assets/images/mbappecard.png",
      position: "DC",
      overall_rating: 91,
      pace: 97,
      shooting: 89,
      passing: 80,
      dribbling: 92,
      defence: 36,
      physical: 76,
      age: 24,
      nationality: "France",
      video1: "https://www.youtube.com/embed/idLt1zL5rnE",
      video2: "https://www.youtube.com/embed/3mwQ6PjAUMw",
      video3: "https://www.youtube.com/embed/dJXzQjdc5hU",
      video4: "https://www.youtube.com/embed/Ng0t2YK7zTE",
      seasons: [
        {
          year: "15/16",
          club: {
            name: "A. S. Monaco F. C.",
            logo: "monaco.jpg",
          },
        },
        {
          year: "17/17",
          club: {
            name: "A. S. Monaco F. C.",
            logo: "monaco.jpg",
          },
        },
        {
          year: "17/18",
          club: {
            name: "A. S. Monaco F. C.",
            logo: "monaco.jpg",
          },
        },
        {
          year: "17/18",
          club: {
            name: "Paris Saint-Germain F. C.",
            logo: "psg.png",
          },
        },
        {
          year: "18/19",
          club: {
            name: "Paris Saint-Germain F. C.",
            logo: "psg.png",
          },
        },
        {
          year: "19/20",
          club: {
            name: "Paris Saint-Germain F. C.",
            logo: "psg.png",
          },
        },
        {
          year: "20/21",
          club: {
            name: "Paris Saint-Germain F. C.",
            logo: "psg.png",
          },
        },
        {
          year: "21/22",
          club: {
            name: "Paris Saint-Germain F. C.",
            logo: "psg.png",
          },
        },
        {
          year: "22/23",
          club: {
            name: "Paris Saint-Germain F. C.",
            logo: "psg.png",
          },
        },
      ],
    },
  ];
  getPlayers(): Player[] {
    return this.players;
  }
  getPlayer(name: string): Observable<Player> {
    const player = this.players.find((h) => h.name === name)!;
    return of(player);
  }
}
