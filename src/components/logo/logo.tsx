import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: block;
  width: 113px;
  height: 113px;
`;

const LogoImage = styled.img`
  display: block;
  width: 113px;
  height: 113px;
`;

const Logo: React.FC = () => {

  return (
    <LogoContainer>
      <LogoImage aria-label={`Logotype of CIAQ project`} src={`img/logo.svg`} />
    </LogoContainer>
  );
};

export { Logo };
