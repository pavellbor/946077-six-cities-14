import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../constants/common';

function PageHeaderUserProfile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  async function onSignOut() {
    await dispatch(logoutAction());
    navigate(AppRoute.Root);
  }

  function handleSignOut(): void {
    onSignOut();
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={user.avatarUrl} />
            </div>
            <span className="header__user-name user__name">{user.email}</span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={handleSignOut}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageHeaderUserProfile;
