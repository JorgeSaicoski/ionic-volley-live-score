import {Set} from "./set"

export class Match {
  id: number;
  sets: Set[];
  isLive: boolean;
  win: boolean;
  matchDate: Date;
  adversary: string;

  constructor(
    id: number,
    sets: Set[],
    isLive: boolean,
    win: boolean,
    matchDate: Date,
    adversary: string
  ) {
    this.id = id;
    this.sets = sets;
    this.isLive = isLive;
    this.win = win;
    this.matchDate = new Date(matchDate);
    this.adversary = adversary;
  }
}