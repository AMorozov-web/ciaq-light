import React from 'react';
import { Header } from '../header/header';
import { Logo } from '../logo/logo';
import { User } from '../user/user';
import { ButtonList } from '../button-list/button-list';
import { Button } from '../button/button';
import {
  Color,
  Gradient,
} from '../../const';

const App: React.FC = () => {

  return (
    <Header>
      <Logo />
      <ButtonList>
        <Button
          width={130}
          height={41}
          gradient={Gradient.REMOVE_BUTTON_GRADIENT}
          onClick={(): void => {
            console.log(`click`);
          }}
          withBorder
          contentType={`text`}
          text={`Download`}
          fontSize={13}
          fontColor={Color.BASIC_WHITE}
        />
        {/* <Button*/}
        {/*  Width={130}*/}
        {/*  Height={41}*/}
        {/*  Gradient={Gradient.SECONDARY_BUTTON_GRADIENT}*/}
        {/*  OnClick={(): void => {*/}
        {/*    Console.log(`click`);*/}
        {/*  }}*/}
        {/*  WithBorder*/}
        {/* />*/}
        {/* <Button*/}
        {/*  Width={130}*/}
        {/*  Height={41}*/}
        {/*  Color={Color.ACCENTUATE}*/}
        {/*  OnClick={(): void => {*/}
        {/*    Console.log(`click`);*/}
        {/*  }}*/}
        {/*  WithBorder*/}
        {/* />*/}
      </ButtonList>
      <User />
    </Header>
  );
};

export { App };
