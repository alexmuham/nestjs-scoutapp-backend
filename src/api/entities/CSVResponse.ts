export interface ranking {
  top: string;
  percentile: string;
  average: string;
}

export interface PercentileRankings {
  FB?: ranking;
  C?: ranking;
  '1B'?: ranking;
  '10 SPL'?: ranking;
  '60'?: ranking;
  IF?: ranking;
  Pop?: ranking;
}

export interface PGEventResults {
  fastball_velocity: string;
  '10_yd_split': string;
  infield_velocity: string;
  exit_velocity: string;
  '60_yd_dash': string;
}

export interface Statistic {
  Percentile_rankings: PercentileRankings;
  PG_event_results: PGEventResults;
  Career_progressions: object;
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
  statistics: string;
}
