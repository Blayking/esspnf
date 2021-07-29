import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router';

import { LoginForm } from './login-form';
import { LoginWrapper } from './login.style';
import { LoginFormState, FormFields } from './login.type';

interface LoginState {
  formState: LoginFormState;
  errorState?: {
    message: string;
  };
}

function LoginContainer(): JSX.Element {
  const user = useTracker(() => Meteor.user());
  const history = useHistory();
  const [loginState, setLoginState] = useState<LoginState>({
    formState: {
      username: '',
      password: '',
    },
  });

  if (user) {
    return <Redirect to="/" />;
  }

  const handleFormFieldChange = (formField: FormFields, value: string) => {
    setLoginState({
      ...loginState,
      formState: { ...loginState.formState, [formField]: value },
    });
  };

  const onSubmit = () => {
    const { username, password } = loginState.formState;

    Meteor.loginWithPassword(username, password, (error) => {
      if (!error) {
        history.replace('/');
      } else {
        setLoginState({
          ...loginState,
          errorState: { message: error.message },
        });
      }
    });
  };

  return (
    <LoginWrapper>
      <LoginForm
        handleFormFieldChange={handleFormFieldChange}
        onFinish={onSubmit}
        errorMessage={loginState.errorState?.message}
      />
    </LoginWrapper>
  );
}

export { LoginContainer };
