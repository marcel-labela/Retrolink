import * as React from 'react';

import { Heading } from 'components/common/typography';

import { Container } from './styled';

export const TopBar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
    </Container>
  );
}

type TopBarProps = {
  title?: string;
};