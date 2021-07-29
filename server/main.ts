import { Meteor } from 'meteor/meteor';
import {
  CommunityCollection,
  PostCollection,
  ProductsCollection,
} from 'imports/api/db';

import './publications/index.ts';
import '../imports/api/methods';
import './api/index.ts';

Meteor.startup(() => {});
