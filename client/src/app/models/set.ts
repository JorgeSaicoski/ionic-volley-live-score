export class Set {
    id: number;
    matchId: number;
    scoreTeamA: number;
    scoreTeamB: number;
    win: boolean;

    constructor(
        id: number,
        matchId: number,
        scoreTeamA: number,
        scoreTeamB: number,
        win: boolean
    ) {
        this.id = id;
        this.matchId = matchId;
        this.scoreTeamA = scoreTeamA;
        this.scoreTeamB = scoreTeamB;
        this.win = win;
    }
}
