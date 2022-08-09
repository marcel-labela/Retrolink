import * as React from 'react';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import { BackArrow } from 'components/common/svg';

const theme = {
  colors: {
    primary: '#673AB7',
    secondary: '#1B3A46',
    black: '#212427',
    white: '#ffffff',
    background: '#ffffff',
    green: '#91B4B9',
    error: '#FF0000',
    gray: Object.assign('#535353', {
      light: '#D8DFE0',
      placeholder: '#A7A7A7',
    }),
  },
  shadows: {
    listItem: (elevation = 1) => 'box-shadow: 0px 0px 4px rgba(146, 146, 146, 0.15)',
  },
  fonts: {
    regular: {
      700: 'roboto-Bold',
      600: 'roboto-Medium',
      500: 'roboto-Regular',
      400: 'robot-Light',
    },
  },
};

const headerTheme: StackHeaderOptions = {
  headerBackTitleVisible: false,
  headerBackImage: () => (
    <BackArrow
      height={24}
      width={24}
      position={{ left: 24 }}
      fill={theme.colors.white}
    />
  ),
  headerStyle: {
    height: 100,
    backgroundColor: theme.colors.primary,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: theme.fonts.regular['400'],
    fontSize: 16,
    color: theme.colors.white,
    paddingBottom: 6,
  },
};

export default {
  ...theme,
  navigation: {
    header: headerTheme,
  },
};