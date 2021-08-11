import React from 'react';
import styled from 'styled-components';
import { Color } from '../../const';

const StyledButton = styled.button<IButtonProps>`
  display: block;
  width: ${({ width }) : number => width}px;
  height: ${({ height }) : number => height}px;
  padding: 0;
  border: ${({ withBorder }) : string => {
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

const Button : React.FC<IButtonProps> = ({ width, height, withBorder, color, gradient }) => {

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
