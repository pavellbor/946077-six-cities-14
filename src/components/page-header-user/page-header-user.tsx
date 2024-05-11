import { AuthorizationStatus } from '../../constants/common';
import { useAppSelector } from '../../hooks';
import PageHeaderUserProfile from '../page-header-user-profile/page-header-user-profile';
import PageHeaderUserSignIn from '../page-header-user-sign-in/page-header-user-sign-in';

function PageHeaderUser() {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <PageHeaderUserProfile />
  ) : (
    <PageHeaderUserSignIn />
  );
}

export default PageHeaderUser;
