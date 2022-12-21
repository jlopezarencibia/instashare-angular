import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'InstaShare',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44317/',
    redirectUri: baseUrl,
    clientId: 'InstaShare_App',
    responseType: 'code',
    scope: 'offline_access InstaShare',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44317',
      rootNamespace: 'InstaShare',
    },
  },
} as Environment;
