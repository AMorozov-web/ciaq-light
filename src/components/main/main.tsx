import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  width: 1300px;
  min-height: 163px;
  margin: 0 auto;
  padding-top: 60px;
`;

interface IMainProps {
  children?: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {

  return (
    <main>
      <MainContainer>
        {children}
      </MainContainer>
    </main>
  );
};

export { Main };
