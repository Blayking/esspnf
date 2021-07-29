import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { IMessageCollection } from '../messages/message.collection';

export interface IPostCollection {
  _id: string;
  communityId?: string;
  author: Meteor.User;
  title: string;
  bodyText: string;
  messages: IMessageCollection[];
}

export const PostCollection = new Mongo.Collection<IPostCollection>('posts');
