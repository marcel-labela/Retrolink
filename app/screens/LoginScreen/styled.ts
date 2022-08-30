import styled, { css } from 'styled-components/native';
import { Container } from 'layout/Container';

export const ExtendedContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 25px 0 25px 0;
  width: 100%;
  flex-grow: 1;
  height: 100%;
`;

export const FooterContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
