import styled, { css } from 'styled-components/native';
import { PressableProps } from 'react-native';

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.colors.secondary,
}))<InputProps>`
  color: black;
  width: 100%;
  height: 51px;
  padding: 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.regular['500']};
  border-radius: 10px;
  ${({ theme }) => theme.shadows.listItem()};
  ${({ hasError }) => hasError && css`
    border-bottom-color: ${({ theme }) => theme.colors.error};
  `}
  ${({ hasIcon }) => hasIcon && css`
    padding-right: 50px;
  `}
`;

export type InputProps = {
  hasError?: boolean;
  hasIcon?: boolean;
};

export const InputIcon = styled.Pressable<IconWrapperProps>`
  position: absolute;
  top: 14px;
  right: 16px;
  justify-content: center;
  align-items: center;
  ${({ readOnly }) => readOnly && css`
    opacity: .4;
  `}
`;

type IconWrapperProps = PressableProps & {
  readOnly?: boolean;
};

export const InputWrapper = styled.View`
  position: relative;
  width: 100%;
`;