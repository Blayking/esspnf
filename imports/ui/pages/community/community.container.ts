import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { CommunityCollection, PostCollection } from '/imports/api/db';

import { PostContent } from './community.type';
import { Community } from '/imports/ui/pages/community/community';
import { ICommunityCollection } from '../../../api/db/communities/community.collection';

interface IUpdatedCommunity {
  name?: string;
  description?: string;
}

function CommunityContainer() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { posts, isLoading, community } = useTracker(() => {
    const postsHandler = Meteor.subscribe('getPostsForCommunity', id);
    const communityHandler = Meteor.subscribe('getCurrentCommunityInfo', id);

    if (!postsHandler.ready() || !communityHandler.ready()) {
      return { isLoading: true, posts: [] };
    }

    const posts = PostCollection.find({ communityId: id }).fetch();
    const community = CommunityCollection.findOne({ _id: id });

    return { isLoading: false, posts, community };
  });

  const deleteCommunity = (communityId: ICommunityCollection) => {
    Meteor.call('deleteCommunity', communityId);
    history.replace('/communities');
  };

  const updateCommunity = (
    communityId: ICommunityCollection,
    updatedCommunity: IUpdatedCommunity
  ) => {
    Meteor.call('updateCommunity', {
      id: communityId,
      name: updatedCommunity.name,
      description: updatedCommunity.description,
    });
  };

  const addPost = (content: PostContent) => {
    Meteor.call('createPost', {
      content: { title: content.title, bodyText: content.bodyText },
      author: Meteor.user(),
      communityId: id,
    });
  };

  return React.createElement(Community, {
    isLoading,
    posts,
    currentCommunity: community,
    addPost,
    deleteCommunity,
    updateCommunity,
  });
}

export { CommunityContainer };
