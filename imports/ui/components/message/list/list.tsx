import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { IMessageCollection } from '/imports/api/db/messages/message.collection';

export function MessageList({ messages }: { messages: IMessageCollection[] }) {
  return (
    <List>
      {messages.map((message) => (
        <ListItem>
          <Typography variant="caption" style={{ marginRight: '1rem' }}>
            {message.author.username}
          </Typography>
          <Typography>{message.content}</Typography>
        </ListItem>
      ))}
    </List>
  );
}
