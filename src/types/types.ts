import type React from "react";

export type TextButtonExtraProps = {
  children?: React.ReactNode;
  fontSize: number;
  fontColor: string;
};

export type IconButtonExtraProps = {
  iconWidth: number;
  iconHeight: number;
};

export type ButtonMainProps = {
  width: number;
  height: number;
  color?: string;
  gradient?: string[];
  withBorder?: boolean;
  onClick?: ()=> void;
  iconSrc?: string;
};
