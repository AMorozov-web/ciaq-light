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
import { Main } from '../main/main';

const App: React.FC = () => {

  return (
    <>
      <Header>
        <Logo />
        <ButtonList>
          <Button
            width={130}
            height={41}
            gradient={Gradient.CTA_BUTTON_GRADIENT}
            contentType={`text`}
            text={`Upload file`}
            fontSize={13}
            fontColor={Color.BASIC_WHITE}
          />
          <Button
            width={130}
            height={41}
            gradient={Gradient.GHOST_BUTTON_GRADIENT}
            contentType={`text`}
            text={`Load demo`}
            fontSize={13}
            fontColor={Color.GHOST_BUTTON_TEXT}
          />
        </ButtonList>
        <User />
      </Header>
      <Main />
    </>
  );
};

export { App };
