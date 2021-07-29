import { Meteor } from 'meteor/meteor';

export interface IMessageCollection {
  //   _id?: string;
  content: string;
  author: Meteor.User;
}
