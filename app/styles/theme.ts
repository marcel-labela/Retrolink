import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { DefaultTheme } from '@react-navigation/native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

const theme = {
  colors: {
    primary: '#562F94',
    purple: Object.assign('#472F94', {
      medium: '#372571',
    }),
    secondary: '#212427',
    secondaryButton: '#33525D',
    black: '#212427',
    white: '#ffffff',
    background: '#EDF1F1',
    green: '#91B4B9',
    error: '#FF0000',
    gray: Object.assign('#535353', {
      light: '#D8DFE0',
      placeholder: '#A7A7A7',
    }),
  },
  shadows: {
    listItem: 'box-shadow: 0px 0px 4px rgba(146, 146, 146, 0.15)',
  },
  fonts: {
    regular: {
      700: 'AvenirNext-Heavy',
      600: 'AvenirNext-Medium',
      500: 'AvenirNext-Regular',
      400: 'AvenirNext-Light',
    },
  },
};

const tabBarTheme: BottomTabNavigationOptions = {
  tabBarActiveTintColor: theme.colors.white,
  tabBarInactiveTintColor: theme.colors.purple.medium,
  tabBarStyle: {
    paddingBottom: 18,
    height: 78,
    borderRadius: 14,
    backgroundColor: theme.colors.primary,
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    paddingHorizontal: 1,
    fontSize: 14,
  },
  tabBarIconStyle: {
    bottom: -4,
  }
};

const headerTheme: StackHeaderOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    height: 70,
    backgroundColor: theme.colors.background,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: theme.fonts.regular['700'],
    fontSize: 17,
    color: theme.colors.secondary,
    paddingBottom: 6,
  },
};

export default {
  ...theme,
  navigation: {
    tabBar: tabBarTheme,
    header: headerTheme,
  },
  navigationTheme: {
    ...DefaultTheme,
  },
};