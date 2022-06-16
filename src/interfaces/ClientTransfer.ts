export interface ClientTransfer {
  playerName: string | null;
  playerId: number | null;
  date: string;
  type: string | null;
  teams: {
    in: {
      id: number | null;
      name: string | null;
      logo: string | null;
    };
    out: {
      id: number | null;
      name: string | null;
      logo: string | null;
    };
  };
  season: string;
}
