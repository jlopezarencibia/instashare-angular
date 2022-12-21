import { mapEnumToOptions } from '@abp/ng.core';

export enum FileStatus {
  Pending = 0,
  Processing = 1,
  Processed = 2,
}

export const fileStatusOptions = mapEnumToOptions(FileStatus);
