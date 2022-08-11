import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { Label } from '../Label';
import { FormFieldsWrapper, FormFieldDescription } from './styled';

export const FormField: React.FC<FormFieldProps> = ({
  children, label, error, description, active,
}) => {
  return (
    <FormFieldsWrapper>
      {label && (
        <Label>
          {label}
        </Label>
      )}
      {children}
      {(error || description) && (
        <FormFieldDescription isError={!!error}>
          {error?.message || description || 'Dit veld is verplicht'}
        </FormFieldDescription>
      )}
    </FormFieldsWrapper>
  );
};

export type FormFieldProps = {
  label?: string;
  description?: string;
  error?: FieldError;
  active?: boolean;
  children?: React.ReactNode;
};