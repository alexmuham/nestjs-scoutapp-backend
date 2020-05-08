import {ICloudStorage} from './ICloudStorage';
import {Bucket, Storage} from '@google-cloud/storage';
import IConfigService from 'services/config/IConfigService';
import {Injectable} from '@nestjs/common';
import {Buffer} from 'buffer';

@Injectable()
export class CloudStorage extends ICloudStorage {
  private readonly storage: Storage;

  private readonly bucket: Bucket;

  constructor(private configService: IConfigService) {
    super();
    const projectId = configService.get('CLOUD_STORAGE_PROJECT_ID'); // TODO add CLOUD_STORAGE_PROJECT_ID
    const bucket = this.configService.get('GOOGLE_CLOUD_STORAGE_BUCKET'); // TODO add GOOGLE_CLOUD_STORAGE_BUCKET
    this.storage = new Storage({
      projectId,
    });
    this.bucket = this.storage.bucket(bucket);
  }

  addFile(mediaLink: string, mimeType: string, buffer: Buffer) {
    return new Promise<void>((resolve, reject) => {
      this.bucket
        .file(mediaLink)
        .createWriteStream({
          gzip: true,
          contentType: mimeType,
        })
        .on('error', (e) => reject(e))
        .end(buffer, () => resolve());
    });
  }

  async getFileByName(file: string) {
    return {
      stream: await this.bucket.file(file).createReadStream({validation: false}),
    };
  }
}
