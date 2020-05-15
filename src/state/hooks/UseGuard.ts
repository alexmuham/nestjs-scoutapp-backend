import {useEffect} from 'react';
import {AuthInfoKeeper} from 'auth';
import {useHistory} from 'react-router-native';

export function useGuard() {
  const history = useHistory();
  useEffect(() => {
    AuthInfoKeeper.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        history.push('/main');
      }
    });
  }, []);
}
