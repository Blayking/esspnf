import { Input, Button, Form } from 'antd';
import React, { useState } from 'react';

import { StyledForm } from '../../login/login-form/login-form.style';
import { ProductsContent } from '../products.type';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface AddProductProps {
  addProductHandler: (products: ProductsContent) => void;
}

function AddProducts({ addProductHandler }: AddProductProps): JSX.Element {
  const [content, setProductState] = useState<ProductsContent>({
    price: '',
    title: '',
  });

  const handleProductCreation = () => {
    addProductHandler({
      price: content.price,
      title: content.title,
    });
    setProductState({ title: '', price: '' });
  };

  const handleProductBodyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductState({ ...content, price: event.target.value });
  };

  const handleProductTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductState({ ...content, title: event.target.value });
  };

  return (
    <StyledForm
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleProductCreation}
    >
      <h1>Create a Product</h1>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'A product needs title!' }]}
      >
        <Input
          value={content.title}
          name="title"
          onChange={handleProductTitleChange}
        />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'A product needs price!' }]}
      >
        <Input
          value={content.price}
          name="price"
          onChange={handleProductBodyChange}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Create Product
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

export { AddProducts };
