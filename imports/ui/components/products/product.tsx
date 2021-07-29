import React from 'react';
import { StyledProduct } from './product.style';
import { IMessageCollection } from '/imports/api/db/messages/message.collection';
import { Meteor } from 'meteor/meteor';
import { MessageList } from '../message/list/list';
import { InputContainer } from '../message/input/input.container';

interface ProductProps {
  _id?: string;
  body: string;
  title: string;
  ownerName: string;
  messages: IMessageCollection[];
}

export function Product(props: ProductProps): JSX.Element {
  const handleOnSend = (message: IMessageCollection) => {
    Meteor.call('addMessageToProduct', props._id, message);
  };
  return (
    <StyledProduct>
      <p>{props.ownerName}</p>
      <p>{props.title}</p>
      <p>{props.body}</p>
      {props.messages && <MessageList messages={props.messages} />}
      <InputContainer onSend={handleOnSend} />
    </StyledProduct>
  );
}
