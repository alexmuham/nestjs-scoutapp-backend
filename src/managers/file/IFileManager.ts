import {Readable} from 'stream';
import {Buffer} from 'buffer';
import {ID} from 'entities/Common';

export default abstract class IFileManager {
  abstract addFile(name: string, mimeType: string, buffer: Buffer): Promise<{id: ID}>;

  abstract getFile(id: {id: string}): Promise<{stream: Readable}>;
}
