export interface Ranking {
  id: string;
  top: string;
  percentile: string;
  average: string;
}

export default interface PercentileRankings {
  id: string;
  FB?: Ranking;
  C?: Ranking;
  oneB?: Ranking;
  tenSPL?: Ranking;
  sixty?: Ranking;
  IF?: Ranking;
  pop?: Ranking;
}
