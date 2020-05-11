import {Injectable} from '@nestjs/common';
import IFileManager from './IFileManager';
import IFileStore from 'database/stores/file/IFileStore';
import {Buffer} from 'buffer';
import {v4 as uuidv4} from 'uuid';
import ScoutAppError from '../../ScoutAppError';
import {ICloudStorage} from '@spryrocks/files-google-cloud-storage';

@Injectable()
export default class FileManager extends IFileManager {
  constructor(
    private readonly fileStore: IFileStore,
    private readonly cloudStorage: ICloudStorage,
  ) {
    super();
  }

  async addFile(name: string, mimeType: string, buffer: Buffer) {
    const mediaLink = uuidv4();
    const file = await this.fileStore.addFile(name, mimeType, mediaLink);
    await this.cloudStorage.addFile(mediaLink, mimeType, buffer);
    return {id: file.id};
  }

  public async getFile(file: {id: string}) {
    const f = await this.fileStore.getFile(file);
    if (!f) throw new ScoutAppError('File not found');
    return this.cloudStorage.getFileByName(f.mediaLink);
  }
}
