import File from '../../entities/File';

export default abstract class IFileStore {
  abstract addFile(
    name: string,
    mimeType: string,
    mediaLink: string,
    date: Date,
  ): Promise<File>;

  abstract getFile(file: {id: string}): Promise<File | undefined>;
}
