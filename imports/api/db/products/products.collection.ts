import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { IMessageCollection } from '../messages/message.collection';

export interface IProductsCollection {
  _id?: string;
  title: string;
  price: string;
  author: Meteor.User;
  messages: IMessageCollection[];
}

export const ProductsCollection = new Mongo.Collection<IProductsCollection>(
  'products'
);
