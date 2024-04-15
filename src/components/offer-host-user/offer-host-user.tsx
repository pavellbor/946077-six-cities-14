import { User } from '../../types/user';

type OfferHostUserProps = {
  user: User;
};

function OfferHostUser({ user }: OfferHostUserProps): JSX.Element {
  return (
    <div className="offer__host-user user">
      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
        <img
          className="offer__avatar user__avatar"
          src={user.avatarUrl}
          width="74"
          height="74"
          alt="Host avatar"
        />
      </div>
      <span className="offer__user-name">{user.name}</span>
      {user.isPro && <span className="offer__user-status">Pro</span>}
    </div>
  );
}

export default OfferHostUser;
