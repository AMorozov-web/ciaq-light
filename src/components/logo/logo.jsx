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

const Logo = () => {

  return (
    <LogoContainer>
      <LogoImage src="img/logo.svg" aria-label="Logotype of CIAQ project" />
    </LogoContainer>
  );
};

export {Logo};
