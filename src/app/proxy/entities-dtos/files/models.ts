import type { FileStatus } from '../../shared/file-status.enum';

export interface UserFileDto {
  userId: number;
  profileId: number;
  friendlyName?: string;
  size: number;
  status: FileStatus;
  blobId: number;
}
