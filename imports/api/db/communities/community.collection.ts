import { Mongo } from 'meteor/mongo';

export interface ICommunityCollection {
  _id?: string;
  name: string;
  description: string;
  ownerId: string;
}

export const CommunityCollection = new Mongo.Collection<ICommunityCollection>(
  'communities'
);
