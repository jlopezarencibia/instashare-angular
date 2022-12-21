import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { UserFileDto } from '../../entities-dtos/files/models';
import type { FileNewDto } from '../../other-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class UserFileService {
  apiName = 'Default';
  

  create = (newFile: FileNewDto) =>
    this.restService.request<any, UserFileDto>({
      method: 'POST',
      url: '/api/app/user-file',
      body: newFile,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, UserFileDto>({
      method: 'DELETE',
      url: `/api/app/user-file/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, UserFileDto>({
      method: 'GET',
      url: `/api/app/user-file/${id}`,
    },
    { apiName: this.apiName });
  

  getAllByProfileId = (profileId: number) =>
    this.restService.request<any, UserFileDto[]>({
      method: 'GET',
      url: `/api/app/user-file/by-profile-id/${profileId}`,
    },
    { apiName: this.apiName });
  

  update = (newFIle: FileNewDto) =>
    this.restService.request<any, UserFileDto>({
      method: 'PUT',
      url: '/api/app/user-file',
      body: newFIle,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
