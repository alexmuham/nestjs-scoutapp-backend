import {useEffect} from 'react';
import {AuthInfoKeeper} from 'auth';
import {useHistory} from 'react-router-native';

export function useGuard(authorization: {requireAuthenticated: boolean}) {
  const history = useHistory();

  if (!authorization.requireAuthenticated) {
    useEffect(() => {
      AuthInfoKeeper.isAuthenticated().then((isAuthenticated) => {
        if (isAuthenticated) {
          history.push('/main');
        }
      });
    }, []);
  } else {
    useEffect(() => {
      AuthInfoKeeper.isAuthenticated().then((isAuthenticated) => {
        if (!isAuthenticated) {
          history.push('/auth');
        }
      });
    }, []);
  }
}
