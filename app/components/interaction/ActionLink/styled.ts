import styled, { css } from 'styled-components/native';

export const ActionContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ActionLink = styled.Pressable`
  padding: 16px 0 12px 16px;
`;

export const Divider = styled.View`
  height: 1px;
  border-radius: 30px;
  width: 100%;
  opacity: 0.2;
  background-color: ${({ theme }) => theme.colors.primary};
`;