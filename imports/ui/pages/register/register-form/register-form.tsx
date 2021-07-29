import React from 'react';
import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

import { FormFields } from '../register.type';
import { StyledForm } from './register-form.style';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface RegisterFormProps {
  handleFormFieldChange: (formField: FormFields, value: string) => void;
  onFinish: () => void;
}

function RegisterForm({ handleFormFieldChange, onFinish }: RegisterFormProps) {
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
      <h1>Register</h1>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input name="firstName" onChange={onFormFieldChange} />
      </Form.Item>
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your firstName!' }]}
      >
        <Input name="lastName" onChange={onFormFieldChange} />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input name="username" onChange={onFormFieldChange} />
      </Form.Item>
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
        <Link to="/login">Already have an account? Login here.</Link>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
}

export { RegisterForm };
