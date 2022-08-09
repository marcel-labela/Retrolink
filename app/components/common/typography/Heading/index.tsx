import styled from 'styled-components';
import { Text } from 'react-native';

export const Heading = styled(Text)<HeadingType>`
  font-family: 'Roboto';
  font-size: ${({ size }) => size ? `${size}px` : '30px'};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}px` : '40px'};
  color: ${({ theme }) => theme.colors.black};
`;

type HeadingType = {
  size?: number;
  align?: 'center' | 'left' | 'right';
  lineHeight?: number;
};