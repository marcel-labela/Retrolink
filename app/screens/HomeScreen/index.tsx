import * as React from 'react';

import { Container } from 'layout/Container';
import { Heading, Text } from 'components/common/typography';
import { RootTabScreenProps } from '../../types';

//@TODO: Fix hier de type nog even.
export const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

  return (
    <Container placement="start" align="left">
      <Heading>Je bent ingelogged!</Heading>
    </Container>
  );
}
