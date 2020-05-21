import CareerProgressions from 'entities/CareerProgressions';
import PercentileRankings from 'entities/PercentileRankings';
import PGEventResults from 'entities/PGEventResults';

export default interface Player {
  id: string;
  name: string;
  externalId: string;
  height: string;
  weight: string;
  bats: string;
  throws: string;
  graduatingClass: string;
  primaryPosition: string;
  highSchool: string;
  contactPhone: string;
  highSchoolContactPhone: string;
  statePositionRanking: string;
  stateOverallRanking: string;
  nationalPositionRanking: string;
  nationalOverallRanking: string;
  collegeCommitment: string;
  careerProgressions?: CareerProgressions;
  percentileRankings?: PercentileRankings;
  pGEventResults?: PGEventResults;
  images: string[];
}
