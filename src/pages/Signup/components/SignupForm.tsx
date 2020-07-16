import React, { useEffect } from 'react';
import shallowequal from 'shallowequal';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../../../hooks/typedHooks';
import useForm from '../../../hooks/useForm';
import Input from '../../../components/Input';
import Error from '../../../components/Error';
import Button from '../../../components/Button';
import {
  Form,
  FormCard,
  FormLink,
  FormTitle,
  AlreadyHave,
} from '../../../common/styles';

const SignInForm: React.FC = () => {
  const signup = useStoreActions((state) => state.auth.signup);
  const clearError = useStoreActions((state) => state.auth.clearError);
  const { error, isLoading } = useStoreState(
    (state) => ({
      error: state.auth.error,
      isLoading: state.auth.isLoading,
    }),
    shallowequal
  );

  useEffect(() => {
    clearError();
  }, [clearError]);

  const onSubmit = async (): Promise<void> => {
    await signup(values);
  };
  const { values, isSubmitting, handleChange, handleSubmit } = useForm(
    onSubmit,
    { email: '', password: '', fullname: '' }
  );

  return (
    <FormCard>
      <FormTitle>Sign up</FormTitle>
      <Form onSubmit={handleSubmit}>
        {error && <Error message={error} />}
        <Input
          label='Full name'
          name='fullname'
          type='text'
          onChange={handleChange}
          value={values.fullname}
          placeholder='Type your full name'
          margin
        />
        <Input
          label='Email'
          name='email'
          type='email'
          onChange={handleChange}
          value={values.email}
          placeholder='Type your email'
          margin
        />
        <Input
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          value={values.password}
          placeholder='Type your password'
        />
        <Button
          disabled={!isSubmitting || isLoading}
          fullWidth
          variant='primary'
          size='lg'
        >
          {isLoading ? 'Signing' : 'Sign up'}
        </Button>

        <AlreadyHave>
          Already have an account?
          <FormLink as={Link} to='/'>
            {' '}
            Log in
          </FormLink>
        </AlreadyHave>
      </Form>
    </FormCard>
  );
};

export default React.memo(SignInForm);
