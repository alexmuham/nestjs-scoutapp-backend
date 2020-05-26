export default interface SearchRequest {
  name?: string;
  height: number[];
  weight: number[];
  position?: string[];
  class: number[];
  commitment?: string;
  bat?: string;
  throw?: string;
  sixtyTime: number[];
  tenYard: number[];
  positionVelocity?: string;
  exitVelocity: number[];
}
