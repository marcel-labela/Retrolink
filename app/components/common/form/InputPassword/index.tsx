import * as i from 'types';
import * as React from 'react';
import { TextInput } from 'react-native';

import theme from 'constants/styles/theme';
import { EyeClosed, EyeOpen } from 'components/common/svg';
import { Input } from 'components/common/form';

export const InputPassword = React.forwardRef<TextInput, i.InputProps>((props, ref) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);

  return (
    <Input
      ref={ref}
      secureTextEntry={secureTextEntry}
      handleIconClick={() => setSecureTextEntry(!secureTextEntry)}
      icon={secureTextEntry
        ? <EyeOpen fill={theme.colors.secondary} />
        : <EyeClosed fill={theme.colors.secondary} />}
      {...props}
    />
  );
});