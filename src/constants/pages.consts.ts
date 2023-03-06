import { TRoutes } from '@/types/pagesTypes';

export const routes: TRoutes = [
  {
    title: 'Converter',
    path: '/',
  },
  {
    title: 'List',
    path: '/watchlist',
  },
].map((route, index) => ({ ...route, id: index + 1 }));
