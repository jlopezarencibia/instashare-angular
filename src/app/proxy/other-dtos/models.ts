
export interface FileNewDto {
  userId: number;
  profileId: number;
  friendlyName?: string;
  physicalFile: number[];
}

export interface UserProfileNewDto {
  firstName?: string;
  lastName?: string;
  userId: number;
}
