import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export interface IEventsCollection {
  _id?: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  publisher?: Meteor.User;
  organizer?: string;
}

export const EventsCollection = new Mongo.Collection<IEventsCollection>(
  'events'
);
