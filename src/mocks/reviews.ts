import { Comment } from '../types/comment';

export const reviews: Comment[] = [
  {
    id: '921d2126-544b-4f7e-8d85-dea83efd3f92',
    comment:
      'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2024-03-29T21:00:00.373Z',
    rating: 3,
    user: {
      name: 'Zak',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false,
    },
  },
  {
    id: 'e5cfe6c9-83d7-4c86-9428-86e2d2316f85',
    comment:
      "Home is amazing. It's like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius",
    date: '2024-03-28T21:00:00.373Z',
    rating: 2,
    user: {
      name: 'Isaac',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/10.jpg',
      isPro: true,
    },
  },
  {
    id: 'eaeb618e-a5b2-4aa5-a512-c4a9d9cd5bf1',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2024-03-27T21:00:00.373Z',
    rating: 3,
    user: {
      name: 'Corey',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: true,
    },
  },
];
