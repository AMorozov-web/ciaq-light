import React from 'react';
import { Header } from '../header/header';
import { Logo } from '../logo/logo';
import { User } from '../user/user';

const App = () : React.ReactElement => {

  return (
    <Header>
      <Logo />
      <User />
    </Header>
  );
};

export { App };
