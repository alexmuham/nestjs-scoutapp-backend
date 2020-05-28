// import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
// import File from './File';
//
// @Entity()
// export default class LocalLogin {
//   constructor(id: string, date: string, notes: string, videos: File[]) {
//     this.id = id;
//     this.date = date;
//     this.notes = notes;
//     this.videos = videos;
//   }
//
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//
//   @Column('text')
//   date: string;
//
//   @Column('text')
//   notes: string;
//
//   @ManyToMany(() => File, {nullable: false})
//   @JoinTable()
//   videos: File[];
// }
