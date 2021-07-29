import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

import { RegisterWrapper } from './register.style';
import { RegisterFormState, FormFields } from './register.type';
import { RegisterForm } from './register-form';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router';

interface RegisterState {
  formState: RegisterFormState;
}

function RegisterContainer() {
  const user = useTracker(() => Meteor.user());
  const [registerState, setRegisterState] = useState<RegisterState>({
    formState: {
      username: '',
      password: '',
      repeatPassword: '',
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  if (user) {
    return <Redirect to="/" />;
  }

  const handleFormFieldChange = (formField: FormFields, value: string) => {
    setRegisterState({
      ...registerState,
      formState: { ...registerState.formState, [formField]: value },
    });
  };

  const onFinish = () => {
    const { username, password, email, firstName, lastName } = registerState.formState;

    Accounts.createUser({ username, email, password, profile: { firstName, lastName } });
  };

  return (
    <RegisterWrapper>
      <RegisterForm
        onFinish={onFinish}
        handleFormFieldChange={handleFormFieldChange}
      />
    </RegisterWrapper>
  );
}

export { RegisterContainer };
