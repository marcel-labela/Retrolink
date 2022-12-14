import styled from 'styled-components/native';

import { Text } from 'common/typography';

export const Label = styled(Text)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular['600']};
  padding-bottom: 8px;
`;