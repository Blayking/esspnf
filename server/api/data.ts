import express from 'express';
import { Meteor } from 'meteor/meteor';
import { EventsCollection } from '../../imports/api/db/events/events.collection';
import {
  CommunityCollection,
  PostCollection,
  ProductsCollection,
} from '/imports/api/db';

const app = express();
/*var path = require('path'); */

app.get('/api', (_req, res) => {
  const communities = CommunityCollection.find().fetch();
  const users = Meteor.users.find().fetch();
  const posts = PostCollection.find().fetch();
  const products = ProductsCollection.find().fetch();
  const events = EventsCollection.find().fetch();

  /*var options = {
    root: path.join(__dirname),
  };
  function next(_err: Error) {
    throw new Error('Function not implemented.');
  }
  var fileName = 'Data.txt';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
*/
  res.json({ communities, users, posts, products, events });
});

export { app };
