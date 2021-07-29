import { Spin } from 'antd';
import React from 'react';
import { CommunityList } from './community-list';
import { CreateCommunity } from './create-community';
import { ICommunityCollection } from '/imports/api/db/communities/community.collection';

interface CommunitiesProps {
  communities: ICommunityCollection[];
  handleCreateModalOpen: () => void;
  handleCreateModalClose: () => void;
  handleOnCreateFormChange: (
    name: 'name' | 'description',
    value: string
  ) => void;
  handleCreateCommunity: () => void;
  isModalOpen: boolean;
  error?: string;
  isLoading: boolean;
}

function Communities({
  handleCreateModalOpen,
  communities,
  isModalOpen,
  handleCreateCommunity,
  handleCreateModalClose,
  handleOnCreateFormChange,
  error,
  isLoading,
}: CommunitiesProps): JSX.Element {
  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <CreateCommunity
        isModalOpen={isModalOpen}
        handleCreateModalOpen={handleCreateModalOpen}
        handleCreateCommunity={handleCreateCommunity}
        handleCreateModalClose={handleCreateModalClose}
        handleOnCreateFormChange={handleOnCreateFormChange}
        error={error}
      />
      <CommunityList communities={communities} />
    </>
  );
}

export { Communities };
