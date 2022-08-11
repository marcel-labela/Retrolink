import * as i from 'types';
import * as React from 'react';
import { TextInput } from 'react-native';

import theme from 'styles/theme';

import { FormField } from '../FormField';
import { StyledInput, InputWrapper, InputIcon } from './styled';

export const Input = React.forwardRef<TextInput, i.InputProps>(({
  label, icon, error, editable, description, handleIconClick, value, onChange, ...props
}, ref) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const active = isFocus || Boolean(value);
  const IconComponent = icon as React.ElementType;

  return (
    <FormField {...{ label, error, description, active }}>
      <InputWrapper>
        <StyledInput
          // @ts-ignore
          ref={ref}
          hasIcon={!!icon}
          hasError={!!error}
          onChangeText={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholderTextColor={theme.colors.gray.placeholder}
          {...{ value, editable, ...props }}
        />
        {icon && (
          <InputIcon
            hitSlop={10}
            readOnly={!handleIconClick}
            onPress={handleIconClick}
          >
            {IconComponent}
          </InputIcon>
        )}
      </InputWrapper>
    </FormField>
  );
});