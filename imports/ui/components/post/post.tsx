import { Typography } from '@material-ui/core';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { InputContainer, MessageList } from '../message';
import { StyledPost } from './post.style';
import { IMessageCollection } from '/imports/api/db/messages/message.collection';

interface PostProps {
  _id: string;
  body: string;
  title: string;
  author: string;
  messages?: IMessageCollection[];
}

export function Post(props: PostProps): JSX.Element {
  const handleOnSend = (message: IMessageCollection) => {
    Meteor.call('addMessageToPost', props._id, message);
  };
  return (
    <StyledPost elevation={5}>
      <Typography>{props.author}</Typography>
      <Typography>{props.title}</Typography>
      <Typography>{props.body}</Typography>
      {props.messages && <MessageList messages={props.messages} />}
      <InputContainer onSend={handleOnSend} />
    </StyledPost>
  );
}
