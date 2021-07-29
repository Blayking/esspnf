import React from 'react';
import { Input, Button } from '@material-ui/core';

interface MessageInputProps {
  message: string;
  handleOnChange: (text: string) => void;
  handleOnSend: () => void;
}

export function MessageInput({
  handleOnChange,
  handleOnSend,
  message,
}: MessageInputProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleOnSend();
      }}
    >
      <Input
        placeholder="Type your message"
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <Button disabled={!message.length} type="submit">
        Send Message
      </Button>
    </form>
  );
}
