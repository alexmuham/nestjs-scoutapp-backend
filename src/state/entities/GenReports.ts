export interface GenFiles {
  filesUris: string[];
  filesIds: string[];
}

export default interface GenReports {
  files: GenFiles | undefined;
  notes: string | undefined;
  date: Date | undefined;
}
