import styled from 'styled-components/native';

export const Heading = styled.Text<HeadingProps>`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.regular['700']};
  letter-spacing: 1.56px;
  color: ${({ theme, variant }) => theme.colors[variant || 'black']};
  margin-bottom: 12px;
`;

type HeadingProps = {
  variant?: 'white' | 'black';
}
