import {ScoutApiTokenHolders} from 'api';
import Config from 'app/Config';
import {ApolloError} from 'apollo-boost';
import ApiHttpError from '@spryrocks/react-api/rest/ApiHttpError';
import ApiError from '@spryrocks/react-api/rest/ApiError';

export const getHeaders = () => {
  const token = ScoutApiTokenHolders.getToken();
  const headers: any = {
    platform: Config.getPlatform(),
  };
  if (token) {
    headers.authorization = token;
  }
  return headers;
};

export const checkNotAuthorizedError = (e: ApolloError | ApiHttpError): boolean => {
  if (e instanceof ApiError) {
    return e.status === 401;
  }
  if (e.graphQLErrors) {
    // @ts-ignore
    const gqlError = R.filter((e) => e.message.statusCode === 401, e.graphQLErrors);
    return gqlError && gqlError.length > 0;
  }
  return false;
};
