import RegisterRequest from 'auth/RegisterRequest';
import ApiRegisterRequest from 'api/entities/RegisterRequest';
import LoginRequest from 'auth/LoginRequest';
import ApiLoginRequest from 'api/entities/LoginRequest';
import {Account} from 'entities/Account';
import User from 'entities/User';
import AdditionalUserInfo from 'entities/AdditionalUserInfo';
import ApiConfiguration from '@spryrocks/react-api/ApiConfiguration';
import {User as GQLUser} from './graphql/types';

export const mapRegisterRequestToApi = (
  registerRequest: RegisterRequest,
): ApiRegisterRequest => ({
  firstName: registerRequest.firstName,
  lastName: registerRequest.lastName,
  education: registerRequest.education,
  email: registerRequest.email,
  password: registerRequest.password,
  phoneNumber: registerRequest.phoneNumber,
});

export const mapLoginRequestToApi = (loginRequest: LoginRequest): ApiLoginRequest => ({
  email: loginRequest.email,
  password: loginRequest.password,
});

export const mapAdditionalUserInfoFromGQL = (
  additionalInfo: AdditionalUserInfo,
): AdditionalUserInfo => ({
  email: additionalInfo.email,
});

export const mapImageFromGQL = (
  configuration: ApiConfiguration,
  imageId: string,
): string => {
  let baseUrl = `${configuration.url}:${configuration.port}`;
  if (configuration.globalPrefix) baseUrl += configuration.globalPrefix;
  return `${baseUrl}${configuration.rest.path}/files/${imageId}`;
};

export const mapUserFromGQL = (configuration: ApiConfiguration, user: GQLUser): User => ({
  id: user.id,
  email: user.email,
  image: mapImageFromGQL(configuration, user.image),
  education: user.education,
  phoneNumber: user.phoneNumber,
  lastName: user.lastName,
  firstName: user.firstName,
});

export const mapMyAccountFromGQL = (
  configuration: ApiConfiguration,
  account: any,
): Account => ({
  info: mapAdditionalUserInfoFromGQL(account.info),
  user: mapUserFromGQL(configuration, account.user),
});
