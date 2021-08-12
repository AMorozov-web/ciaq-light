import styled from 'styled-components';
import {
  Color,
  Shadows,
} from '../const';
import type { ButtonMainProps } from '../types/types';

const StyledButton = styled.button<ButtonMainProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ width }): number => width}px;
  min-height: ${({ height }): number => height}px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  ${({ color }): string => {
    return color !== undefined
      ? `background-color: ${color}`
      : ``;
  }};
  ${({ gradient }): string => {
    return gradient !== undefined
      ? `background: linear-gradient(0deg, ${gradient.join(`, `)})`
      : ``;
  }};
  border: ${({ withBorder }): string => {
    return withBorder === true
      ? `1px solid ${Color.BASIC_WHITE}`
      : `none`;
  }};
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    ${({ gradient }): string => {
    return gradient !== undefined
      ? `background: linear-gradient(0deg, ${gradient.slice().reverse().join(`, `)})`
      : ``;
  }};
    ${({ color }): string => {
    return color !== undefined
      ? `${Shadows.LIGHT_BUTTON_SHADOW}`
      : ``;
  }};
  }

  &:active {
    transform: scale(0.97);
  }
`;

export { StyledButton };
