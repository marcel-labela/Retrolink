import * as React from 'react';
import Svg from 'react-native-svg';
import styled from 'styled-components/native';

const IconWrapper = styled.View<IconWrapperProps>`
  display: flex;
  justify-content: center;
  left: ${({ left }) => left || 0}px;
  right: ${({ right }) => right || 0}px;
  bottom: ${({ bottom }) => bottom || 0}px;
  top: ${({ top }) => top || 0}px;
`;

type IconWrapperProps = {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
};

export const SvgWrapper: React.FC<SvgWrapperProps> = ({
  children, width, height, fill, stroke, viewBox, position,
}) => {
  return (
    <IconWrapper {...position}>
      <Svg
        width={width}
        height={height}
        viewBox={viewBox}
      >
        {React.cloneElement(children as React.ReactElement, { fill, stroke })}
      </Svg>
    </IconWrapper>
  );
};

type SvgWrapperProps = {
  children: React.ReactElement;
  position?: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  };
  fill?: string;
  stroke?: string;
  height?: number;
  width?: number;
  viewBox: string;
};