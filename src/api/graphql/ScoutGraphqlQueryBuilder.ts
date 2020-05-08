import {createQuery} from '@spryrocks/react-api/graphql/Query';
import {gql} from 'apollo-boost';
import {Account} from './types';

export const myAccountQuery = createQuery<{myAccount: Account}, Account>(
  gql`
    query myAccount {
      myAccount {
        user {
          id
          name
        }
        info {
          email
        }
      }
    }
  `,
  ({myAccount}) => myAccount,
);
