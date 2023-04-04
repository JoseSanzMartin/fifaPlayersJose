import { Season } from "./season.interface";

export interface Player {
  id: number;
  name: string;
  image: string;
  image2: string;
  position: string;
  overall_rating: number;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defence: number;
  physical: number;
  age: number;
  nationality: string;
  video1: string;
  video2: string;
  video3: string;
  video4: string;
  seasons: Season[];
}
