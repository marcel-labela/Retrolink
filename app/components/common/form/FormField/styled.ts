import styled, { css } from 'styled-components/native';

import { Text } from 'components/common/typography';

export const FormFieldsWrapper = styled.View`
  max-width: 100%;
  margin-bottom: 28px;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const FormFieldDescription = styled(Text)<FormFieldDescriptionProps>`
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  ${({ isError }) => isError && css`
    color: ${({ theme }) => theme.colors.error};
  `}
`;

type FormFieldDescriptionProps = {
  isError?: boolean;
};