import { Meteor } from 'meteor/meteor';

import {
  CommunityCollection,
  MessagesCollection,
  PostCollection,
  ProductsCollection,
  EventsCollection,
} from '../../imports/api/db';

Meteor.publish('getAllCommunities', function getAllCommunities() {
  return CommunityCollection.find();
});

Meteor.publish(
  'getCommunityForCurrentUser',
  function getCommunitiesForUser(userId: string) {
    return CommunityCollection.find({ ownerId: userId });
  }
);

Meteor.publish('getPostsForCommunity', function (communityId: string) {
  return PostCollection.find({ communityId });
});

Meteor.publish('getUsersForCommunity', function (communityId: string) {
  return Meteor.users.find(
    { communityId },
    { fields: { username: 1, 'profile.firstName': 1, 'profile.lastName': 1 } }
  );
});

Meteor.publish(
  'getCurrentCommunityInfo',
  function (currentCommunityId: string) {
    return CommunityCollection.find({ _id: currentCommunityId });
  }
);

Meteor.publish('getMessagesForPost', function (postId: string) {
  return MessagesCollection.find({ postId });
});

Meteor.publish('getPostsForHomePage', function () {
  return PostCollection.find({ communityId: { $exists: false } });
});

Meteor.publish('getProducts', function () {
  return ProductsCollection.find();
});

Meteor.publish('getEvents', function getEvents() {
  return EventsCollection.find();
});
