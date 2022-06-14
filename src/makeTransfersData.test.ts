import axios, { AxiosResponse } from "axios";
import {
  makeTransfersDataFromLocalFile,
  makeTransfersDataFromApi,
} from "makeTransfersData";
import data from "clientData.json";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const apiResponse = {
  get: "transfers",
  parameters: {
    team: "543",
  },
  errors: [],
  results: 233,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      player: {
        id: 20975,
        name: "Damien Perquis",
      },
      update: "2020-08-29T09:07:19+00:00",
      transfers: [
        {
          date: "2012-08-29",
          type: "€ 750K",
          teams: {
            in: {
              id: 543,
              name: "Real Betis",
              logo: "https://media.api-sports.io/football/teams/543.png",
            },
            out: {
              id: 115,
              name: "Sochaux",
              logo: "https://media.api-sports.io/football/teams/115.png",
            },
          },
        },
        {
          date: "2015-01-26",
          type: "Free",
          teams: {
            in: {
              id: 1601,
              name: "Toronto FC",
              logo: "https://media.api-sports.io/football/teams/1601.png",
            },
            out: {
              id: 543,
              name: "Real Betis",
              logo: "https://media.api-sports.io/football/teams/543.png",
            },
          },
        },
      ],
    },
  ],
};

const remodeledTransfers = [
  {
    playerId: 20975,
    playerName: "Damien Perquis",
    date: "2015-01-26",
    type: "Free",
    teams: {
      in: {
        id: 1601,
        name: "Toronto FC",
        logo: "https://media.api-sports.io/football/teams/1601.png",
      },
      out: {
        id: 543,
        name: "Real Betis",
        logo: "https://media.api-sports.io/football/teams/543.png",
      },
    },
    season: "2015",
  },
  {
    playerId: 20975,
    playerName: "Damien Perquis",
    date: "2012-08-29",
    type: "€ 750K",
    teams: {
      in: {
        id: 543,
        name: "Real Betis",
        logo: "https://media.api-sports.io/football/teams/543.png",
      },
      out: {
        id: 115,
        name: "Sochaux",
        logo: "https://media.api-sports.io/football/teams/115.png",
      },
    },
    season: "2013",
  },
];

describe("makeTransfersDataFromApi", () => {
  it("should return a list with 2 transfers", async () => {
    const mockedResponse: AxiosResponse = {
      data: apiResponse,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const result = await makeTransfersDataFromApi();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toMatchObject(remodeledTransfers);
  });
});

describe("makeTransfersDataFromLocalFile", () => {
  it("should return a list with 2 transfers", () => {
    const result = makeTransfersDataFromLocalFile();

    expect(result).toMatchObject(data);
  });
});
