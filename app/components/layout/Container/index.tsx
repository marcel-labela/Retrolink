import * as React from 'react';

import { ScreenContainer, List, MainAction } from './styled';

export const Container: React.FC<ContainerProps> = ({
  placement = 'center',
  align,
  variant,
  hasMainAction,
  children,
}) => {
  return (
    <ScreenContainer {...{ placement, align, variant, hasMainAction}}>
      {children}
    </ScreenContainer>
  );
};

type ContainerProps = {
  placement?: 'center' | 'top' | 'start' | 'bottom';
  align?: 'left' | 'center';
  variant?: 'primary' | 'secondary';
  hasMainAction?: boolean;
  children?: any;
};

export const Screen = {
  Container,
  List,
  MainAction,
};