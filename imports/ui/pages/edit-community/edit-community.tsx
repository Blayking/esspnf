import React, { useState } from 'react';
import { Spin, Form } from 'antd';
import { CommunityHeader, CommunityLayout } from './community.style';
import { ICommunityCollection } from '/imports/api/db/communities/community.collection';

interface CommunityProps {
  isLoading: boolean;
  currentCommunity?: ICommunityCollection;
  deleteCommunity: (communityId: ICommunityCollection) => void;
  updateCommunity: (
    communityId: string | undefined,
    updatedCommunity: IUpdatedCommunity
  ) => void;
}

interface IUpdatedCommunity {
  name?: string;
  description?: string;
}

function EditCommunity({
  isLoading,
  currentCommunity,
  deleteCommunity,
  updateCommunity,
}: CommunityProps): JSX.Element | null {
  if (isLoading || !currentCommunity) {
    <Spin />;
  }

  if (!currentCommunity?.name || !currentCommunity?.description) return null;

  const [name, setName] = useState(currentCommunity.name);
  const [description, setDescription] = useState(currentCommunity.description);

  return (
    <CommunityLayout>
      {currentCommunity && (
        <>
          <CommunityHeader>
            <h1>{currentCommunity.name}</h1>
          </CommunityHeader>
          <p>{currentCommunity.description}</p>
          <div>
            <Form.Item>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="New title"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="New Description"
              />
            </Form.Item>
          </div>
          <div>
            <span className="pull-right">
              <button
                className="delete"
                onClick={() =>
                  updateCommunity(currentCommunity._id, { name, description })
                }
              >
                Save changes
              </button>
            </span>
            <span className="pull-right">
              <button
                className="delete"
                onClick={() => deleteCommunity(currentCommunity)}
              >
                DeleteCommunity
              </button>
            </span>
          </div>
          <></>
        </>
      )}
    </CommunityLayout>
  );
}

export { EditCommunity };
