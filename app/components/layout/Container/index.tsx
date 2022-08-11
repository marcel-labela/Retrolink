import * as React from 'react';

import { ScreenContainer, List } from './styled';

export const Container: React.FC<ContainerProps> = ({
  placement = 'center',
  align,
  variant,
  children,
}) => {
  return (
    <ScreenContainer {...{ placement, align, variant}}>
      {children}
    </ScreenContainer>
  );
};

type ContainerProps = {
  placement?: 'center' | 'top' | 'start' | 'bottom';
  align?: 'left' | 'center';
  variant?: 'primary' | 'secondary';
  children?: any;
};

export const Screen = {
  Container,
  List,
};