// import styled, { css } from 'styled-components/native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// import { hasNotch, isAndroid } from 'services';

// export const ScreenContainer = styled(KeyboardAwareScrollView).attrs(({
//   placement, align, hasMainAction,
// }: ScreenContainerProps) => ({
//   contentContainerStyle: {
//     justifyContent: 'center',
//     ...(hasMainAction && {
//       paddingBottom: 100,
//     }),
//     alignItems: align === 'left'
//       ? 'flex-start'
//       : 'center',
//     ...(placement === 'top' && {
//       justifyContent: 'flex-start',
//       marginTop: 100,
//     }),
//     ...(placement === 'start' && {
//       justifyContent: 'flex-start',
//       marginTop: 32,
//     }),
//     ...(placement === 'bottom' && {
//       flexGrow: 1,
//       justifyContent: 'flex-end',
//       ...(hasMainAction && {
//         paddingBottom: 24,
//       }),
//     }),
//     ...(placement === 'center' && {
//       flexGrow: 1,
//     }),
//   },
// }))<ScreenContainerProps>`
//   flex: 1;
//   background-color: ${({ theme }) => theme.colors.white};
//   padding: 0 24px;

//   ${({ variant }) => variant === 'secondary' && css`
//     background-color: ${({ theme }) => theme.colors.gray.placeholder};
//   `};
// `;

// type ScreenContainerProps = {
//   placement?: 'center' | 'top' | 'start' | 'bottom';
//   align?: 'center' | 'left';
//   variant?: 'primary' | 'secondary';
//   hasMainAction?: boolean;
// };

// export const List = styled.View`
//   flex: 1;
//   height: 100%;
//   background-color: ${({ theme }) => theme.colors.white};
// `;

// // @TODO: Sloop mainAction er uit.
// export const MainAction = styled.View<MainActionProps>`
//   width: 100%;
//   padding: 0 24px 28px;
//   background-color: transparent;
//   justify-content: flex-end;
//   min-height: ${hasNotch ? 128 : 76}px;
//   ${({ variant }) => variant === 'primary' && css`
//     background-color: ${({ theme }) => theme.colors.primary};
//   `};
//   ${({ variant }) => variant === 'secondary' && css`
//     background-color: ${({ theme }) => theme.colors.secondary};
//   `};
//   ${hasNotch && css`
//     margin-bottom: -40px;
//     padding-bottom: 80px;
//   `}
//   ${isAndroid && css`
//     margin-bottom: -1px;
//   `}
// `;

// type MainActionProps = {
//   variant?: 'primary' | 'secondary';
// };