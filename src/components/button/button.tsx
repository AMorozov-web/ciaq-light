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
      ? `background: linear-gradient(0deg, ${gradient.reverse().join(`, `)})`
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

const ButtonTextContent = styled.span<ButtonContentProps>`
  display: block;
  font-family: ${FontFamily.ARCHIVO_BLACK};
  color: ${({ fontColor }): string | undefined => fontColor};
  text-align: center;
`;

const ButtonImageContent = styled.img<ButtonContentProps>`
  display: flex;
  ${({ imageWidth }): string => {
    return imageWidth !== undefined
      ? `width: ${imageWidth}px`
      : ``;
  }};
  ${({ imageHeight }): string => {
    return imageHeight !== undefined
      ? `width: ${imageHeight}px`
      : ``;
  }};
`;

export enum ButtonContentType {
  image = `image`,
  text = `text`,
}

type ButtonContentProps = (
  | {
    imageWidth: number;
    imageHeight: number;
    imageSrc: string;
    text?: never;
    fontSize?: never;
    fontColor?: never;
  }
  | {
    text: string;
    fontSize: number;
    fontColor?: string;
    imageWidth?: never;
    imageHeight?: never;
    imageSrc?: never;
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
  contentType?: keyof typeof ButtonContentType;
};

const Button: React.FC<ButtonProps> = ({ onClick, contentType, ...props }) => {

  return (
    <StyledButton
      onClick={onClick}
      type={`button`}
      {...props}
    >
      {contentType === ButtonContentType.text
        ? <ButtonTextContent {...props}>{props.text}</ButtonTextContent>
        : <ButtonImageContent {...props} />}
    </StyledButton>
  );
};

export { Button };
