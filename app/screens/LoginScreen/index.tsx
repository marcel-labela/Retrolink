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

import { FormContainer, FooterContainer, ExtendedContainer } from './styled';

export const LoginScreen = ({ navigation }: i.RootTabScreenProps<'LoginScreen'>) => {
  const { login } = useAuthenticationActions();
  const { loading } = useAuthenticationUser();
  const [loginFailed, setLoginFailed] = React.useState(false);

  const [setInputRef, setInputFocus, closeInputs] = useInputFocus<LogInForm>();
  const { control, handleSubmit, watch, reset, formState: { errors } } = useForm<LogInForm>({
    mode: 'onChange',
  });

  const onResetForm = () => {
    reset({
      email: '',
      password: '',
    }, {
      keepErrors: true,
      keepDirty: true,
      keepIsSubmitted: true,
      keepIsValid: true,
      keepTouched: true,
    });
  };

  const onSubmit = (data: LogInForm) => {
    if (loading) return;

    setLoginFailed(false);
    login(data.email, data.password)
    .then(onResetForm)
      .catch(() => {
        onResetForm();
        setLoginFailed(true);
      });
  }

  const values = watch();

  return (
    <ExtendedContainer placement="top" variant="purple" align="left">
        <Heading variant="white">Login</Heading>
        <FormContainer>
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
                error={errors.password}
                label="password"
              />
            )}
          />
        </FormContainer>
        <FooterContainer>
          <Button
              label="Log in"
              loading={loading}
              disabled={loading || !values.password || !values.email}
              onPress={handleSubmit(onSubmit)}
              variant="secondary"
            />
            <Text
              margin="12px 0 0"
              onPress={() => navigation.navigate('RegisterScreen')}
              size={18}
              color="white"
              align="center"
            >
              Want to create a new account?
            </Text>
        </FooterContainer>
    </ExtendedContainer>
  );
}

type LogInForm = {
  email: string;
  password: string;
};
