import styled, { css } from 'styled-components/native';

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme, weight }) => theme.fonts.regular[weight || '500']};
  color: ${({ color, theme }) => theme.colors[color || 'secondary']};
  font-size: ${({ size }) => size || 14}px;
  ${({ color, theme }) => color !== 'gray' ? css`
    color: ${theme.colors[color || 'secondary']};
  ` : css`
    color: ${theme.colors.gray.placeholder};
  `};
  ${({ align }) => align && css`
    text-align: ${align};
  `};
  ${({ margin }) => margin && css`
    margin: ${margin};
  `};
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
  ${({ lineHeight }) => lineHeight && css`
    line-height: ${lineHeight}px;
  `};
  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `};
`;

export type TextProps = {
  color?: 'error' | 'white' | 'primary' | 'green' | 'secondary' | 'gray' | 'black';
  align?: 'left' | 'center' | 'right';
  margin?: string;
  fullWidth?: boolean;
  size?: 10 | 12 | 14 | 16 | 18 | 24;
  lineHeight?: number;
  weight?: 400 | 500 | 600 | 700;
  uppercase?: boolean;
};