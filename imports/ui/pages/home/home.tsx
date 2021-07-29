import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Spin } from 'antd';
import { IPostCollection } from '/imports/api/db/posts/post.collection';
import { AddPost } from '../community/add-post';
import { StyledPostList, StyledPostListItem } from './home.style';
import { Post } from '../../components/post';

interface PostContent {
  bodyText: string;
  image?: string;
  title: string;
}

interface HomepageProps {
  isLoading: boolean;
  posts: IPostCollection[];
  addPost: (content: PostContent) => void;
}

function Homepage({ isLoading, posts, addPost }: HomepageProps): JSX.Element {
  if (isLoading) {
    <Spin />;
  }

  return (
    <>
      {!posts.length && <p>There are no posts</p>}
      <StyledPostList>
        {posts.map(({ _id, bodyText, title, author, messages }) => (
          <StyledPostListItem key={_id}>
            <Post
              _id={_id}
              author={author?.username ?? 'unknown'}
              body={bodyText}
              title={title}
              messages={messages}
            />
          </StyledPostListItem>
        ))}
      </StyledPostList>
      <AddPost addPostHandler={addPost} />
    </>
  );
}

export { Homepage };
