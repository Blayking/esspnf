import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { PostCollection } from '/imports/api/db';

import { PostContent } from '../community/community.type';
import { HomePageLayout } from './home.style';
import { Homepage } from './home';

function HomeContainer() {
  const { posts, isLoading } = useTracker(() => {
    const postsHandler = Meteor.subscribe('getPostsForHomePage');

    if (!postsHandler.ready()) {
      return { isLoading: true, posts: [] };
    }

    const posts = PostCollection.find({
      communityId: { $exists: false },
    }).fetch();

    return { isLoading: false, posts };
  });

  const addPost = (content: PostContent) => {
    Meteor.call('createPostForHomePage', {
      content: { title: content.title, bodyText: content.bodyText },
      author: Meteor.user(),
    });
  };

  return (
    <HomePageLayout>
      <Homepage isLoading={isLoading} addPost={addPost} posts={posts} />
    </HomePageLayout>
  );
}

export { HomeContainer };
