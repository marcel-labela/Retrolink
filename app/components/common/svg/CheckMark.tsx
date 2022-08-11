import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import theme from 'styles/theme';

export const CheckMark: React.FC<CheckMarkProps> = ({
  fill = theme.colors.white,
  ...props
}) => (
  <Svg {...props} viewBox="0 0 10 8">
    <Path
      d="M1.5 4.35714L3.6 6.5L8.5 1.5"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);

type CheckMarkProps = {
  width?: number;
  height?: number;
  fill?: string;
};