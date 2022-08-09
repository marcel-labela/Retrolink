import * as React from 'react';
import { Path } from 'react-native-svg';

import { SvgWrapper } from './SvgWrapper';

export const BackArrow: React.FC<BackArrowProps> = (props) => (
  <SvgWrapper {...props} viewBox="0 0 24 24">
    <Path
      d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31l2.72-2.72Z"
      fill={props.fill}
    />
  </SvgWrapper>
);

type BackArrowProps = {
  width?: number;
  height?: number;
  margin?: string;
  position?: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  };
  fill: string;
};