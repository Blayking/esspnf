import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import { CommunitiesPageLayout } from './communities.style';
import { CommunityCollection } from '/imports/api/db';
import { Communities } from './communities';
import { ICommunityCollection } from '/imports/api/db/communities/community.collection';

interface CreateCommunityFormState {
  name: string;
  description: string;
  isCreateModalOpen: boolean;
}

function CommunitiesContainer(): JSX.Element {
  const [formState, setCreateFormState] = useState<CreateCommunityFormState>({
    name: '',
    description: '',
    isCreateModalOpen: false,
  });

  const [error, setError] = useState('');

  const { isLoading, communities } = useTracker(() => {
    const noData = { communities: [], isLoading: false };
    if (!Meteor.user()) {
      return noData;
    }
    const handler = Meteor.subscribe(
      'getAllCommunities'
    );

    if (!handler.ready()) {
      return { ...noData, isLoading: true };
    }

    const communities: ICommunityCollection[] = CommunityCollection.find().fetch();

    return { isLoading: false, communities };
  });

  const handleCreateCommunity = () => {
    try {
      Meteor.call('createCommunity', formState.name, formState.description);
      setCreateFormState({ ...formState, isCreateModalOpen: false });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreateModalOpen = () => {
    setCreateFormState({ ...formState, isCreateModalOpen: true });
  };

  const handleCreateModalClose = () => {
    setCreateFormState({ ...formState, isCreateModalOpen: false });
  };

  const handleOnCreateFormChange = (
    name: 'name' | 'description',
    value: string
  ) => {
    setCreateFormState({ ...formState, [name]: value });
  };

  return (
    <CommunitiesPageLayout>
      <Communities
        handleCreateModalClose={handleCreateModalClose}
        handleCreateModalOpen={handleCreateModalOpen}
        handleOnCreateFormChange={handleOnCreateFormChange}
        handleCreateCommunity={handleCreateCommunity}
        isModalOpen={formState.isCreateModalOpen}
        communities={communities}
        error={error}
        isLoading={isLoading}
      />
    </CommunitiesPageLayout>
  );
}

export { CommunitiesContainer };
