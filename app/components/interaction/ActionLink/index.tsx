import * as React from 'react';

import { Text } from 'components/common/typography';
import { ActionContainer, ActionLink, Divider } from './styled';

export const ActionLine:React.FC<ActionLineProps> = ({ action, label, textColor }) => {
  const colorOfText = textColor === 'error' ? 'error' : 'black';

  //@TODO Schrijf hier nog logica voor alle onpress styling en events.
  return (
    <ActionContainer>
      <ActionLink onPress={action}>
        <Text size={16} color={colorOfText} margin="0 -16px 0">
          {label}
        </Text>
      </ActionLink>
      <Divider />
    </ActionContainer>
  )
}

type ActionLineProps = {
  action: () => void;
  label: string;
  textColor?: 'error' | 'primary';
};