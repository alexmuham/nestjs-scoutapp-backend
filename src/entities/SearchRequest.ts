export default interface SearchRequest {
  name?: string;
  height: number[];
  weight: number[];
  position?: string[];
  graduatingClass: number[];
  commitment?: string;
  bat?: string;
  playerThrow?: string;
  sixtyTime: number[];
  tenYard: number[];
  positionVelocity?: string;
  exitVelocity: number[];
}
