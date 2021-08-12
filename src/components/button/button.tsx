import React from 'react';
import styled from 'styled-components';
import {
  Color,
  FontFamily,
  Shadows,
} from '../../const';

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ width }): number => width}px;
  min-height: ${({ height }): number => height}px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  ${({ gradient }): string => {
    return gradient !== undefined
      ? `background: linear-gradient(0deg, ${gradient.join(`, `)})`
      : ``;
  }};
  ${({ color }): string => {
    return color !== undefined
      ? `background-color: ${color}`
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

const ButtonText = styled.span<ButtonContentProps>`
  display: block;
  font-family: ${FontFamily.ARCHIVO_BLACK};
  ${({ fontSize }): string => {
    return fontSize !== undefined
      ? `font-size: ${fontSize}px`
      : ``;
  }};
  ${({ fontColor }): string => {
    return fontColor !== undefined
      ? `color: ${fontColor}`
      : ``;
  }};
  text-align: center;
  text-transform: capitalize;
`;

const ButtonIcon = styled.img<ButtonContentProps>`
  display: flex;
  ${({ iconWidth }): string => {
    return iconWidth !== undefined
      ? `width: ${iconWidth}px`
      : ``;
  }};
  ${({ iconHeight }): string => {
    return iconHeight !== undefined
      ? `width: ${iconHeight}px`
      : ``;
  }};
`;

export enum ButtonContentType {
  image = `image`,
  text = `text`,
}

type ButtonContentProps = (
  | {
    contentType: `icon`;
    iconWidth: number;
    iconHeight: number;
    iconSrc: string;
    text?: never;
    fontSize?: never;
    fontColor?: never;
  }
  | {
    contentType: `text`;
    text: string;
    fontSize: number;
    fontColor?: string;
    iconWidth?: never;
    iconHeight?: never;
    iconSrc?: never;
  }
);

type ButtonColorProps = (
  | { color: string; gradient?: never }
  | { color?: never; gradient: string[] }
);

type ButtonProps = ButtonColorProps & ButtonContentProps & {
  width: number;
  height: number;
  withBorder?: boolean;
  onClick?: ()=> void;
};

// Prop onCLick must be required ^^

const Button: React.FC<ButtonProps> = ({ onClick, ...props }) => {

  return (
    <StyledButton
      onClick={onClick}
      type={`button`}
      {...props}
    >
      {props.contentType === ButtonContentType.text
        ? <ButtonText {...props}>{props.text}</ButtonText>
        : <ButtonIcon src={props.iconSrc} {...props} />}
    </StyledButton>
  );
};

export { Button };
