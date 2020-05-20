import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';
import RankingsValue from './RankingsValue';

@Entity()
export default class PercentileRankings {
  constructor(
    id: string,
    FB: RankingsValue,
    FBId: string,
    C: RankingsValue,
    CId: string,
    oneB: RankingsValue,
    oneBId: string,
    tenSPL: RankingsValue,
    tenSPLId: string,
    sixty: RankingsValue,
    sixtyId: string,
    IF: RankingsValue,
    IFId: string,
    pop: RankingsValue,
    popId: string,
  ) {
    this.id = id;
    this.FB = FB;
    this.FBId = FBId;
    this.C = C;
    this.CId = CId;
    this.oneB = oneB;
    this.oneBId = oneBId;
    this.tenSPL = tenSPL;
    this.tenSPLId = tenSPLId;
    this.sixty = sixty;
    this.sixtyId = sixtyId;
    this.IF = IF;
    this.IFId = IFId;
    this.pop = pop;
    this.popId = popId;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RankingsValue, {nullable: true})
  @JoinColumn()
  FB?: RankingsValue;

  @Column('text', {nullable: true})
  FBId?: string;

  @ManyToOne(() => RankingsValue, {nullable: true})
  @JoinColumn()
  C?: RankingsValue;

  @Column('text', {nullable: true})
  CId?: string;

  @ManyToOne(() => RankingsValue, {nullable: true})
  @JoinColumn()
  oneB?: RankingsValue;

  @Column('text', {nullable: true})
  oneBId: string;

  @ManyToOne(() => RankingsValue, {nullable: true})
  @JoinColumn()
  tenSPL?: RankingsValue;

  @Column('text', {nullable: true})
  tenSPLId?: string;

  @ManyToOne(() => RankingsValue, {nullable: true})
  @JoinColumn()
  sixty?: RankingsValue;

  @Column('text', {nullable: true})
  sixtyId?: string;

  @ManyToOne(() => RankingsValue, {nullable: true})
  @JoinColumn()
  IF?: RankingsValue;

  @Column('text', {nullable: true})
  IFId?: string;

  @ManyToOne(() => RankingsValue, {nullable: true})
  @JoinColumn()
  pop?: RankingsValue;

  @Column('text', {nullable: true})
  popId?: string;
}
