import * as i from 'types';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View } from 'react-native';

import { validations, useInputFocus } from 'services';
import { useAuthenticationActions, useAuthenticationUser } from '../../hooks/useAuthentication';

// import { Container } from 'layout/Container';
// import { Heading, Text } from 'components/common/typography';
// import { Button } from 'components/interaction';
// import { Input } from '../../components/common/form/Input';
// import { InputPassword } from '../../components/common/form/InputPassword';

//TODO: Schrijf een errorhandler voor de login functionaliteit.
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
    <View>
      <Text>Dit is het login scherm</Text>
    </View>
    // <Container placement="top">
    //     <Heading size={18}>Login screen</Heading>
    //     <Controller
    //       name="email"
    //       control={control}
    //       rules={{ ...validations.required, ...validations.email }}
    //       render={({ field }) => (
    //         <Input
    //           {...field}
    //           ref={(input) => setInputRef('email', input)}
    //           onSubmitEditing={() => setInputFocus('email')}
    //           returnKeyType="next"
    //           autoCapitalize="none"
    //           error={errors.email}
    //           label="E-mail"
    //           keyboardType="email-address"
    //         />
    //       )}
    //     />
    //     <Controller
    //       name="password"
    //       control={control}
    //       rules={{ ...validations.required }}
    //       render={({ field }) => (
    //         <InputPassword
    //           {...field}
    //           ref={(input) => setInputRef('password', input)}
    //           onSubmitEditing={() => setInputFocus('password')}
    //           returnKeyType="next"
    //           autoCapitalize="none"
    //           error={errors.password}
    //           label="password"
    //         />
    //       )}
    //     />
    //     <Button
    //       label="Log in"
    //       loading={loading}
    //       disabled={loading || !values.password || !values.email}
    //       onPress={handleSubmit(onSubmit)}
    //     />
    //     <Text
    //       margin="12px 0 0"
    //       onPress={() => navigation.navigate('RegisterScreen')}
    //       size={18}
    //     >
    //       Want to create a new account?
    //     </Text>
    // </Container>
  );
}

type LogInForm = {
  email: string;
  password: string;
};
