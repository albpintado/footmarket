export interface ApiElement {
  player: {
    id: number;
    name: string;
  };
  update: string;
  transfers: [
    {
      date: string;
      type: string;
      teams: {
        in: {
          id: number;
          name: string;
          logo: string;
        };
        out: {
          id: number;
          name: string;
          logo: string;
        };
      };
    }
  ];
}
