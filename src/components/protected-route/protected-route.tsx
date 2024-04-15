import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/common';

type ProtectedRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children,
}: ProtectedRouteProps): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;

  return authorizationStatus === restrictedFor ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export default ProtectedRoute;
