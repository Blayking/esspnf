import React from 'react';
import { CommunityListItem } from './community-list-item';
import { StyledCommunityList } from './community-list.style';
import { ICommunityCollection } from '/imports/api/db/communities/community.collection';

interface CommunityListProps {
  communities: ICommunityCollection[];
}

function CommunityList(props: CommunityListProps): JSX.Element {
  return (
    <StyledCommunityList>
      {props.communities.map((community) => (
        <CommunityListItem key={community._id} community={community} />
      ))}
    </StyledCommunityList>
  );
}

export { CommunityList };
