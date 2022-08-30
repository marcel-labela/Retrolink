import styled, { css } from 'styled-components/native';
import { Text, TextProps } from 'common/typography';

export const Container = styled.View<ContainerProps>`
  margin: ${({ margin }) => `${margin || '0px'}`};
  width: ${({ width }) => width ? `${width}px` : '100%'};
`;

type ContainerProps = {
  width?: number;
  margin?: string;
};

export const ButtonText = styled(Text)<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular['600']};
  font-size: 18px;
`;

export const ButtonPressable = styled.Pressable<ButtonPressableProps>`
  justify-content: center;
  align-items: center;
  width: auto;
  height: 48px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: opacity 500ms;
  ${({ variant }) => variant === 'secondary' && css`
    background-color: ${({ theme }) => theme.colors.purple};
    border: 1.5px solid ${({ theme }) => theme.colors.white};
    border-radius: 15px;
  `};
  ${({ variant }) => variant === 'transparent' && css`
    background-color: transparent;
  `};
  ${({ disabled }) => disabled && css`
    border: 1.5px solid ${({ theme }) => theme.colors.purple.medium};
  `}
  ${({ size }) => size === 'small' && css`
    height: 40px;
  `}
`;

type ButtonPressableProps = {
  disabled?: boolean;
  size?: 'regular' | 'small';
  shadow?: boolean;
  variant?: 'primary' | 'secondary' | 'transparent';
};
