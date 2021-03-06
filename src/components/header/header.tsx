import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 1300px;
  min-height: 163px;
  margin: 0 auto;
  padding-top: 50px;
`;

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {

  return (
    <header>
      <HeaderContainer>
        {children}
      </HeaderContainer>
    </header>
  );
};

export { Header };
