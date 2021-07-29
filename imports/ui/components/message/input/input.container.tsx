import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { MessageInput } from './input';
import { IMessageCollection } from '/imports/api/db/messages/message.collection';

export function InputContainer({
  onSend,
}: {
  onSend: (message: IMessageCollection) => void;
}) {
  const [message, setMessage] = useState('');
  const handleOnSend = () => {
    const newMessage: IMessageCollection = {
      content: message,
      author: Meteor.user()!,
    };

    onSend(newMessage);
  };

  return (
    <MessageInput
      handleOnSend={handleOnSend}
      handleOnChange={setMessage}
      message={message}
    />
  );
}
