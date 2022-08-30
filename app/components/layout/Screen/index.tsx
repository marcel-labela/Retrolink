import * as React from 'react';

import { Heading, Text } from 'common/typography';

import { HeaderContainer, ScreenContainer, ScreenContentContainer, ScreenFooterContainer } from './styled';

const ScreenRoot: React.FC<ScreenRootProps> = ({ children, variant }) => {
  return (
    <ScreenContainer {...{ variant }}>{children}</ScreenContainer>
  )
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle, align, textColor }) => {

  return (
    <HeaderContainer align={align}>
      <Heading variant={textColor}>{title}</Heading>
      {subtitle && (
        <Text color={textColor} size={16}>{subtitle}</Text>
      )}
    </HeaderContainer>
  )
}

const ScreenContent: React.FC<ScreenContentProps> = ({ children }) => {
  return (
    <ScreenContentContainer>
      {children}
    </ScreenContentContainer>
  )
}

const ScreenFooter: React.FC<ScreenFooterProps> = ({ children }) => {
  return <ScreenFooterContainer>{children}</ScreenFooterContainer>
}

type ScreenFooterProps = {
  children?: any;
};

type ScreenContentProps = {
  children: any;
};

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  textColor?: 'black' | 'white';
};

type ScreenRootProps = {
  children: any;
  variant?: 'primary' | 'secondary';
};

export const Screen = {
  Root: ScreenRoot,
  Header: ScreenHeader,
  Content: ScreenContent,
  Footer: ScreenFooter,
}