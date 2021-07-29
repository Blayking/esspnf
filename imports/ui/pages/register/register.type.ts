type FormFields =
  | 'username'
  | 'email'
  | 'password'
  | 'repeatPassword'
  | 'firstName'
  | 'lastName';

type RegisterFormState = Record<FormFields, string>;

export { FormFields, RegisterFormState };
