import styled, { css } from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export const ScreenContainer = styled(KeyboardAwareScrollView).attrs(({
  placement, align,
}: ScreenContainerProps) => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: align === 'left'
      ? 'flex-start'
      : 'center',
    ...(placement === 'top' && {
      justifyContent: 'flex-start',
      marginTop: 100,
    }),
    ...(placement === 'start' && {
      justifyContent: 'flex-start',
      marginTop: 32,
    }),
    ...(placement === 'bottom' && {
      flexGrow: 1,
      justifyContent: 'flex-end',
    }),
    ...(placement === 'center' && {
      flexGrow: 1,
    }),
  },
}))<ScreenContainerProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 24px;

  ${({ variant }) => variant === 'secondary' && css`
    background-color: ${({ theme }) => theme.colors.gray.placeholder};
  `};
`;

type ScreenContainerProps = {
  placement?: 'center' | 'top' | 'start' | 'bottom';
  align?: 'center' | 'left';
  variant?: 'primary' | 'secondary';
};

export const List = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
