import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';
import Ranking from './Ranking';

@Entity()
export default class PercentileRankings {
  constructor(
    id: string,
    FB: Ranking,
    FBId: string,
    C: Ranking,
    CId: string,
    oneB: Ranking,
    oneBId: string,
    tenSPL: Ranking,
    tenSPLId: string,
    sixty: Ranking,
    sixtyId: string,
    IF: Ranking,
    IFId: string,
    pop: Ranking,
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

  @ManyToOne(() => Ranking, {nullable: true})
  @JoinColumn()
  FB?: Ranking;

  @Column('text', {nullable: true})
  FBId?: string;

  @ManyToOne(() => Ranking, {nullable: true})
  @JoinColumn()
  C?: Ranking;

  @Column('text', {nullable: true})
  CId?: string;

  @ManyToOne(() => Ranking, {nullable: true})
  @JoinColumn()
  oneB?: Ranking;

  @Column('text', {nullable: true})
  oneBId: string;

  @ManyToOne(() => Ranking, {nullable: true})
  @JoinColumn()
  tenSPL?: Ranking;

  @Column('text', {nullable: true})
  tenSPLId?: string;

  @ManyToOne(() => Ranking, {nullable: true})
  @JoinColumn()
  sixty?: Ranking;

  @Column('text', {nullable: true})
  sixtyId?: string;

  @ManyToOne(() => Ranking, {nullable: true})
  @JoinColumn()
  IF?: Ranking;

  @Column('text', {nullable: true})
  IFId?: string;

  @ManyToOne(() => Ranking, {nullable: true})
  @JoinColumn()
  pop?: Ranking;

  @Column('text', {nullable: true})
  popId?: string;
}
