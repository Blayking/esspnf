import React from 'react';
import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

import { FormFields } from '../login.type';
import { StyledForm } from './login-form.style';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface LoginFormProps {
  handleFormFieldChange: (formField: FormFields, value: string) => void;
  onFinish: () => void;
  errorMessage?: string;
}

function LoginForm({
  handleFormFieldChange,
  onFinish,
  errorMessage,
}: LoginFormProps) {
  const onFormFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFormFieldChange(e.target.name as FormFields, e.target.value);
  };
  return (
    <StyledForm
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1>Login</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="username" onChange={onFormFieldChange} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="password" onChange={onFormFieldChange} />
      </Form.Item>
      <Form.Item>
        <Link to="/register">Don't have an account yet? Register here.</Link>
      </Form.Item>
      {errorMessage && (
        <Form.Item>
          <p style={{ color: 'red' }}>{errorMessage}</p>
        </Form.Item>
      )}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

export { LoginForm };
