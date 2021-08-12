type TextButtonExtraProps = {
  text?: string;
  fontSize: number;
  fontColor: string;
};

type IconButtonExtraProps = {
  iconWidth: number;
  iconHeight: number;
};

type ButtonMainProps = {
  width: number;
  height: number;
  color?: string;
  gradient?: string[];
  withBorder?: boolean;
  onClick?: ()=> void;
  iconSrc?: string;
};

export {
  IconButtonExtraProps,
  TextButtonExtraProps,
  ButtonMainProps,
};
