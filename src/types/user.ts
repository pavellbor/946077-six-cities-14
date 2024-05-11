import { Token } from '../services/token';

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type UserDetails = User & {
  token: Token;
  email: string;
};
