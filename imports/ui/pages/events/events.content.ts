import { Meteor } from 'meteor/meteor';

export interface EventsContent {
  _id?: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  publisher?: Meteor.User;
  organizer?: string;
}
