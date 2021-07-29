import { Meteor } from 'meteor/meteor';
import { CommunityCollection, PostCollection, ProductsCollection } from '../db';
import { IMessageCollection } from '../db/messages/message.collection';
import { PostContent } from '/imports/ui/pages/community/community.type';
import { ProductsContent } from '/imports/ui/pages/products/products.type';
import { EventsContent } from '../../ui/pages/events/events.content';
import { EventsCollection } from '../db/events/events.collection';

interface IUpdatedCommunity {
  name?: string;
  description?: string;
}

Meteor.methods({
  createCommunity: function createCommunity(name: string, description: string) {
    const currentUserId = this.userId;

    if (!currentUserId) {
      throw new Meteor.Error('Forbidden');
    }

    CommunityCollection.insert({
      name,
      description,
      ownerId: currentUserId,
    });
  },

  createPost: function createPost({
    content,
    author,
    communityId,
  }: {
    content: PostContent;
    author: Meteor.User;
    communityId: string;
  }) {
    PostCollection.insert({
      author,
      communityId,
      title: content.title,
      bodyText: content.bodyText,
      messages: [],
    });
  },

  createPostForHomePage: function createPostForHomePage({
    content,
    author,
  }: {
    content: PostContent;
    author: Meteor.User;
  }) {
    PostCollection.insert({
      author,
      bodyText: content.bodyText,
      title: content.title,
      messages: [],
    });
  },

  updateCommunity: function updateCommunity(
    communityId: string,
    updatedCommunity: IUpdatedCommunity
  ) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('Not authorized');
    }
    CommunityCollection.update(
      { _id: communityId },
      {
        $set: {
          name: updatedCommunity.name,
          description: updatedCommunity.description,
        },
      }
    );
  },

  deleteCommunity: function deleteCommunity(communityId) {
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
    }
    CommunityCollection.remove(communityId);
  },

  createProduct: function createProduct({
    content,
    author,
  }: {
    content: ProductsContent;
    author: Meteor.User;
  }) {
    ProductsCollection.insert({
      author,
      price: content.price,
      title: content.title,
      messages: [],
    });
  },

  addMessageToPost: function addMessageToPost(
    postId: string,
    message: IMessageCollection
  ) {
    PostCollection.update(postId, { $push: { messages: message } });
  },

  addMessageToProduct: function addMessageToProduct(
    productId: string,
    message: IMessageCollection
  ) {
    ProductsCollection.update(productId, { $push: { messages: message } });
  },

  createEvents: function createEvents({
    content,
    publisher,
  }: {
    content: EventsContent;
    publisher: Meteor.User;
  }) {
    EventsCollection.insert({
      publisher,
      title: content.title,
      description: content.description,
      startDate: content.startDate,
      endDate: content.endDate,
      organizer: content.organizer,
    });
  },
});
