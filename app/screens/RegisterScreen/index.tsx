import * as i from 'types';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { validations, useInputFocus } from 'services';
import { useAuthenticationActions, useAuthenticationUser } from '../../hooks/useAuthentication';

import { Container } from 'layout/Container';
import { Heading, Text } from 'components/common/typography';
import { Button } from 'components/interaction';
import { Input } from '../../components/common/form/Input';
import { InputPassword } from '../../components/common/form/InputPassword';

export const RegisterScreen = ({ navigation }: i.RootTabScreenProps<'RegisterScreen'>) => {
  const { register } = useAuthenticationActions();
  const { loading } = useAuthenticationUser();
  const [registerFailed, setRegisterFailed] = React.useState(false);

  const [setInputRef, setInputFocus, closeInputs] = useInputFocus<RegisterForm>();
  const { control, handleSubmit, watch, reset, setError, clearErrors, formState: { errors } } = useForm<RegisterForm>({
    mode: 'onChange',
  });

  const onResetForm = () => {
    reset({
      username: '',
      email: '',
      password: '',
      password2: '',
    }, {
      keepErrors: true,
      keepDirty: true,
      keepIsSubmitted: true,
      keepIsValid: true,
      keepTouched: true,
    });
  };

  const values = watch();

  const validatePasswords = (values: RegisterForm) => {
    if (values.password !== values.password2) {
      return {
        validated: false,
        message: 'Passwords do not match',
      }
    }

    clearErrors();
    return {
      validated: true,
      message: 'Passwords match',
    }
  }

  // @TODO: Schrijf een errorhandler voor de register functionaliteit.
  const registerErrorHandler = (error: any) => {
    console.log('error', error);
  }

  const onSubmit = (data: RegisterForm) => {
    if (loading) return;

    const validatedPassword: {validated: boolean, message: string} = validatePasswords(values);
    if (validatedPassword.validated) {
      register(data.email, data.password, data.username)
      .then(onResetForm)
      .catch((error) => {
        registerErrorHandler(error);
        setRegisterFailed(true);
      })
    } else {
      setRegisterFailed(true);
      setError('password', { type: 'required', message: validatedPassword.message });
    }
  }

  return (
    <Container placement="top">
      <Heading>Register screen</Heading>
      <Text size={16} margin="12px 0 12px">Register here for a new account</Text>
      <Controller
          name="username"
          control={control}
          rules={{ ...validations.required }}
          render={({ field }) => (
            <Input
              {...field}
              ref={(input) => setInputRef('username', input)}
              onSubmitEditing={() => setInputFocus('username')}
              returnKeyType="next"
              autoCapitalize="none"
              label="Username"
            />
          )}
        />
      <Controller
          name="email"
          control={control}
          rules={{ ...validations.required, ...validations.email }}
          render={({ field }) => (
            <Input
              {...field}
              ref={(input) => setInputRef('email', input)}
              onSubmitEditing={() => setInputFocus('email')}
              returnKeyType="next"
              autoCapitalize="none"
              error={errors.email}
              label="E-mail"
              keyboardType="email-address"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ ...validations.required }}
          render={({ field }) => (
            <InputPassword
              {...field}
              ref={(input) => setInputRef('password', input)}
              onSubmitEditing={() => setInputFocus('password')}
              returnKeyType="next"
              autoCapitalize="none"
              label="Password"
            />
          )}
        />
        <Controller
          name="password2"
          control={control}
          rules={{ ...validations.required }}
          render={({ field }) => (
            <InputPassword
              {...field}
              ref={(input) => setInputRef('password2', input)}
              onSubmitEditing={() => setInputFocus('password2')}
              returnKeyType="next"
              autoCapitalize="none"
              label="Re-type password to validate your entry"
            />
          )}
        />
        <Button
          label="Register for account"
          loading={loading}
          disabled={loading || !values.password || !values.email}
          onPress={handleSubmit(onSubmit)}
        />
        <Text
          margin="12px 0 0"
          onPress={() => navigation.navigate('LoginScreen')}
          size={18}
          >
          Already have an account?
        </Text>
        {registerFailed && (
          <Text color="error" align="center" margin="12px 0 0" fullWidth>
            something went wrong while making a new account.
          </Text>
        )}
    </Container>
  )
}

type RegisterForm = {
  email: string;
  password: string;
  username: string;
  password2: string;
};