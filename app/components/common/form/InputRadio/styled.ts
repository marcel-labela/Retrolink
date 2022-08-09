import styled, { css } from 'styled-components/native';

export const RadioOption = styled.TouchableOpacity<RadioOptionProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.colors.white}; */
  /* ${({ theme }) => theme.shadows.listItem()}; */
  margin-bottom: 8px;
  ${({ isLast }) => isLast && css`
    margin-bottom: 0;
  `};
`;

type RadioOptionProps = {
  isActive: boolean;
  isLast: boolean;
};

export const Checkbox = styled.View<CheckboxProps>`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 18px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.gray.placeholder};
  /* background-color: ${({ theme }) => theme.colors.white}; */
  ${({ isActive, theme }) => isActive && css`
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.primary};
  `};
`;

type CheckboxProps = {
  isActive: boolean;
};