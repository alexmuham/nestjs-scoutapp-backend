import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class File {
  constructor(id: string, mediaLink: string, name: string, mimeType: string, date: Date) {
    this.id = id;
    this.mediaLink = mediaLink;
    this.name = name;
    this.mimeType = mimeType;
    this.date = date;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mediaLink: string;

  @Column('text')
  name: string;

  @Column('text')
  mimeType: string;

  @Column('text')
  date: Date;
}
