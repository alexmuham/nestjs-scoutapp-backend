import {File} from 'database/entities';

export default abstract class IFileStore {
  abstract addFile(
    name: string,
    mimeType: string,
    mediaLink: string,
    date: Date,
  ): Promise<File>;

  abstract getFile(file: {id: string}): Promise<File | undefined>;

  abstract getFileOrThrow(file: {id: string}): Promise<File>;
}
