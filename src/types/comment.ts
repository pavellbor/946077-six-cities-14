import { User } from './user';

export type NewComment = {
  comment: string;
  rating: number;
};

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
