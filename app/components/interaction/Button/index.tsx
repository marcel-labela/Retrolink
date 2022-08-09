import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonPressable, ButtonText } from './styled';

export const Button: React.FC<ButtonProps> = ({
  children, onPress, disabled, label, style, margin, loading, width,
  size, shadow, hitSlop, variant,
}) => {
  return (
    <Container {...{ margin, width }}>
      <ButtonPressable
        disabled={disabled || loading}
        {...{ size, loading, style, onPress, shadow, hitSlop, variant }}
        style={({ pressed }) => ({
          opacity: pressed ? .7 : 1,
        })}
      >
        {label ? (
          <ButtonText color={variant === 'transparent' ? 'secondary' : 'white'}>
            {loading ? 'Laden...' : label}
          </ButtonText>
        ) : children}
      </ButtonPressable>
    </Container>
  );
};

type ButtonProps = Pick<TouchableOpacityProps, 'onPress' | 'style'> & {
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  margin?: string;
  width?: number;
  size?: 'regular' | 'small';
  shadow?: boolean;
  hitSlop?: number;
  variant?: 'primary' | 'secondary' | 'transparent';
  children?: any;
};
