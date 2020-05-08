import File from 'database/entities/File';

export default abstract class IFileStore {
  abstract addFile(name: string, mimeType: string, mediaLink: string): Promise<File>;

  abstract getFile(file: {id: string}): Promise<File | undefined>;
}
