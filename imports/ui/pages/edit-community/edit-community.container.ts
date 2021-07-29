import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { CommunityCollection } from '/imports/api/db';

import { EditCommunity } from './edit-community';
import { ICommunityCollection } from '../../../api/db/communities/community.collection';

interface IUpdatedCommunity {
  name?: string;
  description?: string;
}

function EditCommunityContainer() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, community } = useTracker(() => {
    const communityHandler = Meteor.subscribe('getCurrentCommunityInfo', id);

    if (!communityHandler.ready()) {
      return { isLoading: true };
    }

    const community = CommunityCollection.findOne({ _id: id });

    return { isLoading: false, community };
  });

  const deleteCommunity = (communityId: ICommunityCollection) => {
    Meteor.call('deleteCommunity', communityId);
  };

  const updateCommunity = (
    communityId: ICommunityCollection,
    updatedCommunity: IUpdatedCommunity
  ) => {
    Meteor.call('updateCommunity', communityId, updatedCommunity);
  };

  return React.createElement(EditCommunity, {
    isLoading,
    currentCommunity: community,
    deleteCommunity,
    updateCommunity,
  });
}

export { EditCommunityContainer };
