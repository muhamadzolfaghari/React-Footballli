interface IPlaySide {
  logo: string;
  id: number;
  api_id: number;
  name: string;
  is_favorite: null;
}

interface IFixture {
  id: string;
  home: IPlaySide;
  away: IPlaySide;
  api_id: string;
  status: string;
  elapsed: number;
  live_url: string;
  start_time: string;
  away_goals: number;
  home_goals: number;
  archive_url: string;
  home_penalty_goals: null;
  away_penalty_goals: null;
}

interface IAllFixtures {
  id: string;
  logo: string;
  name: string;
  api_id: string;
  season: string;
  fixtures: IFixture[];
}

export default interface IFixturesResult {
  favorites: null;
  all: IAllFixtures[];
  live: [];
  pinned: [];
}
