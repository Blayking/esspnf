import React from 'react';
import { Input, Form, Modal, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface CreatePostProps {
  handleCreateModalOpen: () => void;
  handleCreateModalClose: () => void;
  handleOnCreateFormChange: (
    name: 'title' | 'description',
    value: string
  ) => void;
  handleCreatePost: () => void;
  isModalOpen: boolean;
  error?: string;
}

function CreatePost({
  handleCreatePost,
  handleCreateModalOpen,
  handleCreateModalClose,
  handleOnCreateFormChange,
  error,
  isModalOpen,
}: CreatePostProps): JSX.Element {
  const onFormFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOnCreateFormChange(
      event.target.name as 'title' | 'description',
      event.target.value
    );
  };

  return (
    <>
      <Button onClick={handleCreateModalOpen}>Create Post</Button>
      <Modal
        title="Create Post"
        visible={isModalOpen}
        onOk={handleCreatePost}
        onCancel={handleCreateModalClose}
      >
        <Form {...layout} name="basic" initialValues={{ remember: true }}>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input the title for the post!',
              },
            ]}
          >
            <Input name="name" onChange={onFormFieldChange} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please add a post description.',
              },
            ]}
          >
            <Input name="description" onChange={onFormFieldChange} />
          </Form.Item>
          {error && (
            <Form.Item>
              <p style={{ color: 'red' }}>{error}</p>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  );
}

export { CreatePost };
