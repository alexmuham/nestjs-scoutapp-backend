import {Readable} from 'stream';
import {Buffer} from 'buffer';

export abstract class ICloudStorage {
  abstract addFile(name: any, mimeType: string, buffer: Buffer): Promise<void>;

  abstract getFileByName(file: string): Promise<{stream: Readable}>;
}
