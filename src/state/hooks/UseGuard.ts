import {useEffect} from 'react';
import {AuthInfoKeeper} from 'auth';
import {useHistory} from 'react-router-native';

export function useGuard(authorization: {requireAuthenticated: boolean}) {
  const history = useHistory();
  useEffect(() => {
    AuthInfoKeeper.isAuthenticated().then((isAuthenticated) => {
      if (!authorization.requireAuthenticated) {
        if (isAuthenticated) {
          history.push('/main');
        }
      } else if (!isAuthenticated) {
        history.push('/auth');
      }
    });
  }, []);
}
