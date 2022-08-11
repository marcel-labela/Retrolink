/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import 'styled-components';
import * as i from 'types';
import theme from './styles/theme';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FieldError, RegisterOptions } from 'react-hook-form';
import { KeyboardTypeOptions, ReturnKeyTypeOptions, TextInputProps } from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type FormFieldProps = {
  name?: string;
  children?: any;
  label?: string;
  description?: string;
  direction?: 'horizontal' | 'vertical';
  error?: FieldError;
};

export type DefaultInputProps = {
  onChange?: ((text: string) => void) | undefined;
  onChangeText?: (text: string) => void;
  defaultValue?: string;
  name?: string;
  editable?: boolean;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
  icon?: React.ReactNode;
  autoFocus?: boolean;
  placeholder?: string;
  handleIconClick?: ((event: any) => void) | undefined;
  secureTextEntry?: boolean;
  error?: FieldError;
  value?: string;
  onBlur?: () => void;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  autoCorrect?: TextInputProps['autoCorrect'];
};

export type CheckboxItemType = {
  label: string;
  value: string;
};

export type InputProps =
  DefaultInputProps
  & FormFieldProps
  & {
    autoCapitalize?: TextInputProps['autoCapitalize'];
  };

export type SelectOption<T = string> = {
  label: string;
  value: T;
};

export type VariantProp = {
  variant?: i.ThemeColors;
};

export type InputRadioProps<T extends string> = {
  onChange: (option?: T) => void;
  value?: T;
  options: SelectOption<T>[];
} & FormFieldProps;

export type InputCheckboxProps<T extends string> = {
  onChange: (option?: T[]) => void;
  value: T[];
  options: SelectOption<T>[];
} & FormFieldProps;

export type Theme = typeof theme;

// Add Theme type to styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type BaseStyled = {
  theme?: Theme;
  className?: string;
};

// Get color strings from theme
export type ThemeColors = keyof typeof theme.colors;

// Get subcolors from colors if they exist
export type SubThemeColors = {
  [color in ThemeColors]: Exclude<keyof typeof theme.colors[color], keyof string>
};

// Ensures colors exist in theme
export type ColorsFromTheme<Colors extends ThemeColors> = Colors;

// Ensures subcolor exists in color object
export type SubcolorsFromColor<Color extends ThemeColors> = SubThemeColors[Color];

// Ensures subcolor exists in theme
export type SubcolorFromTheme<Color extends ThemeColors, Subcolor extends SubThemeColors[Color]> = [Color, Subcolor];

export type User = {
  username: string;
  email: string;
  password: string;
  id: string;
};