import {File} from 'database/entities';
import IFileStore from './IFileStore';
import {Injectable} from '@nestjs/common';
import {InjectConnection, InjectRepository} from '@nestjs/typeorm';
import {Connection, Repository} from 'typeorm';

@Injectable()
export default class FileStore implements IFileStore {
  constructor(
    @InjectConnection()
    private connection: Connection,
    @InjectRepository(File)
    private readonly fileStore: Repository<File>,
  ) {}

  async addFile(name: string, mimeType: string, mediaLink: string, date: Date) {
    const file = await this.fileStore.create({name, mimeType, mediaLink, date});
    await this.fileStore.insert(file);
    return file;
  }

  async getFile(file: {id: string}) {
    return this.fileStore.findOne({where: {id: file.id}});
  }

  async getFileOrThrow(file: {id: string}) {
    return this.fileStore.findOneOrFail({where: {id: file.id}});
  }
}
