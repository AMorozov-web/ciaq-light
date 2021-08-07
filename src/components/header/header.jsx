import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
  display: flex;
  width: 1300px;
  min-height: 163px;
  margin: 0 auto;
  padding-top: 50px;
`;

const Header = ({children}) => {

  return (
    <header>
      <HeaderContainer>
        {children}
      </HeaderContainer>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export {Header};
