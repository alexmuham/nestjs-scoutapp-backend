import IAuthInfoKeeper from './IAuthInfoKeeper';
import AuthInfoKeeper from './AuthInfoKeeper';

const authInfoKeeper: IAuthInfoKeeper = new AuthInfoKeeper();

export {authInfoKeeper as AuthInfoKeeper};
