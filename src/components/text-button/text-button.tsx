import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../const';
import { StyledButton } from '../../styles/button';
import type {
  ButtonMainProps,
  TextButtonExtraProps,
} from '../../types/types';

const ButtonText = styled.span`
  display: block;
  color: ${({ fontColor }: TextButtonExtraProps): string => fontColor};
  font-family: ${FontFamily.ARCHIVO_BLACK};
  font-size: ${({ fontSize }: TextButtonExtraProps): number => fontSize}px;
  text-align: center;
  text-transform: capitalize;
`;

type TextButtonProps = TextButtonExtraProps & ButtonMainProps;

const TextButton: React.FC<TextButtonProps> = ({ width, height, withBorder, onClick, text, fontSize, fontColor, color, gradient }) => {

  return (
    <StyledButton
      width={width}
      height={height}
      withBorder={withBorder}
      onClick={onClick}
      type={`button`}
      color={color}
      gradient={gradient}
    >
      <ButtonText
        fontColor={fontColor}
        fontSize={fontSize}
      >
        {text}
      </ButtonText>
    </StyledButton>
  );
};

export { TextButton };
