import type { UserFileDto } from './files/models';

export interface UserProfileDto {
  firstName?: string;
  lastName?: string;
  userId: number;
  fileIdList: UserFileDto[];
}
