import styled from 'styled-components/native';

import { Text } from 'components/common/typography';

export const Label = styled(Text)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular['600']};
  padding-bottom: 8px;
`;
