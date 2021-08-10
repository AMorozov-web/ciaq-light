import React from 'react';
import styled from 'styled-components';
import { Color } from '../../const';

const StyledButton = styled.button`
  display: block;
  width: ${({ width } : IButtonProps) : number => width}px;
  height: ${({ height } : IButtonProps) : number => height}px;
  padding: 0;
  border: ${({ withBorder } : IButtonProps) : string => {
    return withBorder === true
      ? `1px solid ${Color.BASIC_WHITE}`
      : `none`;
  }};
`;

interface IButtonProps {
  width : number;
  height : number;
  withBorder ?: boolean;
  color ?: string;
  gradient ?: string;
}

const Button = ({ width, height, withBorder, color, gradient } : IButtonProps) : React.ReactElement => {

  return (
    <StyledButton
      color={color}
      gradient={gradient}
      height={height}
      type={`button`}
      width={width}
      withBorder={withBorder}
    />
  );
};

export { Button };
