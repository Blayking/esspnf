import React, { useState } from 'react';
import { Spin, Form } from 'antd';
import { SettingFilled } from '@ant-design/icons';
import { CommunityHeader, CommunityLayout } from './community.style';
import { Post } from '../../components/post';
import { StyledPostList, StyledPostListItem } from '../home/home.style';
import { IPostCollection } from '/imports/api/db/posts/post.collection';
import { ICommunityCollection } from '/imports/api/db/communities/community.collection';
import { AddPost } from './add-post';
import { PostContent } from './community.type';
import { Link } from 'react-router-dom';

interface CommunityProps {
  isLoading: boolean;
  posts: IPostCollection[];
  currentCommunity?: ICommunityCollection;
  addPost: (content: PostContent) => void;
  deleteCommunity: (communityId: ICommunityCollection) => void;
  updateCommunity: (
    communityId: ICommunityCollection,
    updatedCommunity: IUpdatedCommunity
  ) => any;
}

interface IUpdatedCommunity {
  name?: string;
  description?: string;
}

function Community({
  isLoading,
  posts,
  currentCommunity,
  addPost,
  deleteCommunity,
  updateCommunity,
}: CommunityProps): JSX.Element {
  if (isLoading) {
    <Spin />;
  }
  const [name, setName] = useState('');

  console.log(posts);

  const [description, setDescription] = useState('');
  return (
    <CommunityLayout>
      {currentCommunity && (
        <>
          <CommunityHeader>
            <h1>{currentCommunity.name}</h1>
          </CommunityHeader>
          <p>{currentCommunity.description}</p>
          <Link
            to={`/edit-community/${currentCommunity._id}/edit`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <button>Edit community</button>
          </Link>
          <div>
            <span className="pull-right">
              <button
                className="delete"
                onClick={() => deleteCommunity(currentCommunity)}
              >
                DeleteCommunity
              </button>
            </span>
          </div>
          <>
            {!posts.length && <p>There are no posts</p>}
            <StyledPostList>
              {posts.map(({ _id, bodyText, title, author, messages }) => (
                <StyledPostListItem key={_id}>
                  <Post
                    _id={_id}
                    author={author.username ?? 'anonymous'}
                    body={bodyText}
                    title={title}
                    messages={messages}
                  />
                </StyledPostListItem>
              ))}
            </StyledPostList>
            <AddPost addPostHandler={addPost} />
          </>
        </>
      )}
    </CommunityLayout>
  );
}

export { Community };
