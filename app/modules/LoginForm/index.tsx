import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { validations, useInputFocus } from 'services';
import { useAuthenticationActions, useAuthenticationUser } from '../../hooks/useAuthentication';

import { Button } from 'components/interaction';
import { Input } from '../../components/common/form/Input';
import { InputPassword } from '../../components/common/form/InputPassword';
import { FormContainer, ButtonContainer, Form } from './styled';

// @TODO: Schrijf een error handler met mooie messages die van de BE terugkomen.
// @TODO: ZOlang er een error message staat moet de button disabled blijven.
// @TODO: Wat doen die closeInputs?

export const LoginForm = () => {
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
      .catch((error: any) => {
        console.log('error', error);
        onResetForm();
        setLoginFailed(true);
      });
  }

  const values = watch();

  return (
    <FormContainer>
      <Form>
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
      </Form>
      <ButtonContainer>
        <Button
          label="Log in"
          loading={loading}
          disabled={loading || !values.password || !values.email}
          onPress={handleSubmit(onSubmit)}
          variant="secondary"
        />
      </ButtonContainer>
    </FormContainer>
  )
}

type LogInForm = {
  email: string;
  password: string;
};
