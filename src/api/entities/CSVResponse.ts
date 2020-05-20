export interface result {
  top: string;
  percentile: string;
  average: string;
}

export interface PercentileRankings {
  FB: result | undefined;
  C: result | undefined;
  '1B': result | undefined;
  '10 SPL': result | undefined;
  '60': result | undefined;
  IF: result | undefined;
  Pop: result | undefined;
}

interface PGEventResults {
  fastball_velocity: string | null;
  '10_yd_split': string | null;
  infield_velocity: string | null;
  exit_velocity: string | null;
  '60_yd_dash': string | null;
}

interface statistic {
  Percentile_rankings: PercentileRankings | {};
  PG_event_results: PGEventResults | {};
  Career_progressions: object | {};
}

export default interface CSVResponse {
  name: string;
  external_id: string;
  height: string;
  weight: string;
  bats: string;
  throws: string;
  graduating_class: string;
  primary_position: string;
  high_school: string;
  contact_phone: string;
  high_school_contact_phone: string;
  state_position_ranking: string;
  state_overall_ranking: string;
  national_position_ranking: string;
  national_overall_ranking: string;
  college_commitment: string;
  statistics: statistic;
}
