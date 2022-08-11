import styled from 'styled-components/native';

export const Heading = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.regular['700']};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
`;