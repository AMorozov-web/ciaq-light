import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: block;
  width: 113px;
  height: 113px;
  margin-left: auto;
`;

const UserAvatar = styled.img`
  display: block;
  width: 113px;
  height: 113px;
`;

const User = () : React.ReactElement => {

  return (
    <UserContainer>
      <UserAvatar aria-label={`No avatar image`} src={`img/no-avatar.svg`} />
    </UserContainer>
  );
};

export { User };
