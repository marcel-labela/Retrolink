import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const EyeClosed: React.FC<EyeClosedProps> = ({ fill, ...props }) => (
  <Svg width={24} height={24} viewBox="0 0 24 10" fill={fill} {...props}>
    <Path
      d="M.209.389a1 1 0 011.403-.18l.605.468c.67.518 1.372.976 2.098 1.374.1.033.196.082.285.149l.013.01a16.01 16.01 0 0014.774 0l.013-.01a.999.999 0 01.285-.15A16.048 16.048 0 0021.783.678l.606-.468a1 1 0 111.223 1.582l-.606.468c-.493.38-1 .733-1.52 1.055L23.8 6.4a1 1 0 11-1.6 1.2l-2.488-3.318a17.946 17.946 0 01-3.549 1.247l.807 3.229a1 1 0 01-1.94.485l-.84-3.36a18.05 18.05 0 01-4.38 0l-.84 3.36a1 1 0 01-1.94-.485l.807-3.229a17.944 17.944 0 01-3.548-1.247L1.8 7.6A1 1 0 11.2 6.4l2.314-3.086A18.088 18.088 0 01.994 2.26l-.605-.468A1 1 0 01.209.39z"
      fill-rule="evenodd"
      clip-rule="evenodd"
    />
  </Svg>
);

type EyeClosedProps = {
  width?: number;
  height?: number;
  fill?: string;
};