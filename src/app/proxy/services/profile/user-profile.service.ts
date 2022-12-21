import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { UserProfileDto } from '../../entities-dtos/models';
import type { UserProfileNewDto } from '../../other-dtos/models';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  apiName = 'Default';
  

  create = (newUserProfileData: UserProfileNewDto) =>
    this.restService.request<any, UserProfileDto>({
      method: 'POST',
      url: '/api/app/user-profile',
      body: newUserProfileData,
    },
    { apiName: this.apiName });
  

  delete = (id: number) =>
    this.restService.request<any, UserProfileDto>({
      method: 'DELETE',
      url: `/api/app/user-profile/${id}`,
    },
    { apiName: this.apiName });
  

  get = (id: number) =>
    this.restService.request<any, UserProfileDto>({
      method: 'GET',
      url: `/api/app/user-profile/${id}`,
    },
    { apiName: this.apiName });
  

  update = (newUserProfileDto: UserProfileNewDto) =>
    this.restService.request<any, UserProfileDto>({
      method: 'PUT',
      url: '/api/app/user-profile',
      body: newUserProfileDto,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
