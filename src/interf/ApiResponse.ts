import { ApiElement } from "interf/ApiElement";

export interface ApiResponse {
  get: string;
  parameters: {
    team: string;
  };
  errors: [];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: ApiElement[];
}
