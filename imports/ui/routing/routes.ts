import { Component } from 'react';
import {
  HomeContainer,
  LoginContainer,
  RegisterContainer,
  CommunitiesContainer,
  ProfileContainer,
  ProductsContainer,
  CommunityContainer,
  EditCommunityContainer,
  EventsContainer,
} from '../pages';
import { IRoute } from './route.type';

const publicRoutes: IRoute[] = [
  {
    path: '/login',
    exact: true,
    Component: LoginContainer,
  },
  {
    path: '/register',
    exact: true,
    Component: RegisterContainer,
  },
];

const privateRoutes: IRoute[] = [
  {
    path: '/',
    exact: true,
    Component: HomeContainer,
  },
  {
    path: '/communities',
    exact: true,
    Component: CommunitiesContainer,
  },
  {
    path: '/profile',
    exact: true,
    Component: ProfileContainer,
  },
  {
    path: '/products',
    exact: true,
    Component: ProductsContainer,
  },
  {
    path: '/edit-community/:id/edit',
    exact: true,
    Component: EditCommunityContainer,
  },
  {
    path: '/communities/:id',
    exact: true,
    Component: CommunityContainer,
  },
  {
    path: '/events',
    exact: true,
    Component: EventsContainer,
  },
  {
    path: '/api',
    exact: true,
  },
];

export { publicRoutes, privateRoutes };
