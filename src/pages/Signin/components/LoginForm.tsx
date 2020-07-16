import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../../../hooks/typedHooks';
import useForm from '../../../hooks/useForm';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import {
  Form,
  FormCard,
  FormLink,
  FormTitle,
  AlreadyHave,
} from '../../../common/styles';
import { ForgotLink } from '../styles';

const LoginForm: React.FC = () => {
  const { signin, clearError } = useStoreActions((state) => ({
    clearError: state.auth.clearError,
    signin: state.auth.signin,
  }));

  const error = useStoreState((state) => state.auth.error);

  useEffect(() => {
    clearError();
  }, [clearError]);

  const onSubmit = async (): Promise<void> => {
    await signin(values);
  };

  const { values, handleChange, handleSubmit, isSubmitting } = useForm(
    onSubmit,
    { email: '', password: '' }
  );

  return (
    <FormCard>
      <FormTitle>Log in</FormTitle>
      <Form onSubmit={handleSubmit}>
        {error && <Error message={error} />}

        <Input
          label='Email'
          name='email'
          type='email'
          value={values.email}
          placeholder='Type your email'
          onChange={handleChange}
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
        <ForgotLink>Forgot Password?</ForgotLink>
        <Button fullWidth variant='primary' size='lg' disabled={!isSubmitting}>
          Log in
        </Button>
        <AlreadyHave>
          Don’t have an account yet?
          <FormLink as={Link} to='/signup'>
            {' '}
            Sign up
          </FormLink>
        </AlreadyHave>
      </Form>
    </FormCard>
  );
};

export default React.memo(LoginForm);
