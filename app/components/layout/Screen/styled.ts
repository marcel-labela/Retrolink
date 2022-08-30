import styled, { css } from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Text } from 'common/typography';

export const HeaderContainer = styled.View<HeaderContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 15%;
`;

export const ScreenContainer = styled(KeyboardAwareScrollView).attrs(({
  variant,
}: ScreenContainerProps) => ({
  contentContainerStyle: {
    justifyContent: 'center',
    paddingTop: '25%',
    flexDirection: 'column',
    flex: 1
  },
}))<ScreenContainerProps>`
  padding: 0 28px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ variant }) => variant === 'primary' && css`
    background-color: ${({ theme }) => theme.colors.white};
  `};

  ${({ variant }) => variant === 'secondary' && css`
    background-color: ${({ theme }) => theme.colors.purple};
  `}
`;

type ScreenContainerProps = {
  variant?: 'primary' | 'secondary';
};

export const ScreenContentContainer = styled.View`
  flex: 3;
  display: flex;
`;

export const ScreenFooterContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

type HeaderContainerProps = {
  align?: 'center' | 'left' | 'right';
}