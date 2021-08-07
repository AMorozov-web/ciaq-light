import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Color} from '../../const';

const StyledButton = styled.button`
  display: block;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  padding: 0;
  border: ${({withBorder}) => withBorder ? `1px solid ${Color.BASIC_WHITE}` : `none`};
`;

const Button = ({width, height, withBorder, color, gradient}) => {

  return (
    <StyledButton
      type="button"
      width={width}
      height={height}
      withBorder={withBorder}
      color={color}
      gradient={gradient}
    />
  );
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  withBorder: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
};

export {Button};
