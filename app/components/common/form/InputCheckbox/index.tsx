import * as i from 'types';
import * as React from 'react';

import { Text } from 'components/common/typography';
import { CheckMark } from 'components/common/svg';

import { FormField } from '../FormField';
import { CheckboxOption, Checkbox } from './styled';

export const InputCheckbox = <T extends string>({
  name, label, error, description, value, onChange, options,
}: i.InputCheckboxProps<T>) => {
  return (
    <FormField {...{
      name, label, error, description, active: Boolean(value),
    }}>
      {options.map((option, index) => {
        const optionIsActive = value.indexOf(option.value) > -1;

        return (
          <CheckboxOption
            key={option.value}
            isActive={optionIsActive}
            isLast={index === options.length - 1}
            onPress={() => onChange(!optionIsActive
              ? [...value, option.value]
              : value.filter((val) => val !== option.value),
            )}
            activeOpacity={0.6}
          >
            <Checkbox isActive={optionIsActive}>
              {optionIsActive && (
                <CheckMark width={10} height={8} />
              )}
            </Checkbox>
            <Text>{option.label}</Text>
          </CheckboxOption>
        );
      })}
    </FormField>
  );
};