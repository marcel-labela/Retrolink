import * as i from 'types';
import * as React from 'react';

import { Text } from 'components/common/typography';
import { CheckMark } from 'components/common/svg';

import { FormField } from '../FormField';
import { RadioOption, Checkbox } from './styled';

export const InputRadio = <T extends string>({
  name, label, error, description, value, onChange, options,
}: i.InputRadioProps<T>) => {
  return (
    <FormField {...{
      name, label, error, description, active: Boolean(value),
    }}>
      {options.map((option, index) => {
        const optionIsActive = option.value === value;

        return (
          <RadioOption
            key={option.value}
            isActive={optionIsActive}
            isLast={index === options.length - 1}
            activeOpacity={0.6}
            onPress={() => onChange(!optionIsActive
              ? option.value
              : undefined,
            )}
          >
            <Checkbox isActive={optionIsActive}>
              {optionIsActive && (
                <CheckMark width={10} height={8} />
              )}
            </Checkbox>
            <Text>{option.label}</Text>
          </RadioOption>
        );
      })}
    </FormField>
  );
};