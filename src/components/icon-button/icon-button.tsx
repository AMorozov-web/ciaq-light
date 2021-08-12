import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../styles/button';
import type {
  ButtonMainProps,
  IconButtonExtraProps,
} from '../../types/types';

const ButtonIcon = styled.img<IconButtonExtraProps>`
  display: flex;
  width: ${({ iconWidth }): number => iconWidth}px;
  height: ${({ iconHeight }): number => iconHeight}px;
`;

type IconButtonProps = IconButtonExtraProps & ButtonMainProps;

const IconButton: React.FC<IconButtonProps> = ({ width, height, withBorder, onClick, iconWidth, iconHeight, iconSrc, color, gradient }) => {

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
      <ButtonIcon
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        src={iconSrc}
      />
    </StyledButton>
  );
};

export { IconButton };
