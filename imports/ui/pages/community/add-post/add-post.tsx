import { Input, Button, Form } from 'antd';
import React, { useState } from 'react';

import { StyledForm } from '../../login/login-form/login-form.style';
import { PostContent } from '../community.type';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface AddPostProps {
  addPostHandler: (post: PostContent) => void;
}

function AddPost({ addPostHandler }: AddPostProps): JSX.Element {
  const [postContent, setPostState] = useState<PostContent>({ bodyText: '', title: '' });

  const handlePostCreation = () => {
    addPostHandler({ bodyText: postContent.bodyText, title: postContent.title });
    setPostState({ title: '', bodyText: '' });
  };

  const handlePostBodyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
      setPostState({ ...postContent, bodyText: event.target.value });
  };

  const handlePostTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
      setPostState({ ...postContent, title: event.target.value });
  };

  return (
    <StyledForm
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handlePostCreation}
    >
      <h1>Create a Post</h1>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'A post needs title!' }]}
      >
        <Input value={postContent.title} name="title" onChange={handlePostTitleChange} />
      </Form.Item>

      <Form.Item
        label="Body"
        name="bodyText"
        rules={[{ required: true, message: 'A post needs content!' }]}
      >
        <Input value={postContent.bodyText} name="bodyText" onChange={handlePostBodyChange} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Create Post
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

export { AddPost };
