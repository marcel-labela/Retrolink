import * as React from 'react';
import { TextInput, Keyboard } from 'react-native';

export const useInputFocus = <T>() => {
  const refs = React.useRef<Refs<T>>({});

  const setRef = (name: keyof T, ref: TextInput) => {
    refs.current[name] = ref;
  };

  return [
    setRef,
    (name) => refs.current[name]?.focus(),
    () => Keyboard.dismiss(),
  ] as ReturnType<T>;
};


type Refs<T> = {
  [P in keyof T]?: TextInput;
};

type ReturnType<T> = [
  (name: keyof T, ref: TextInput | null) => void,
  (name: keyof T) => void,
  () => void,
];