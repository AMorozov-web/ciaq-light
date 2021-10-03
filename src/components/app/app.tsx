import React from 'react';
import { Header } from '../header/header';
import { Logo } from '../logo/logo';
import { User } from '../user/user';
import { ButtonList } from '../button-list/button-list';
import { TextButton } from '../text-button/text-button';
import { IconButton } from '../icon-button/icon-button';
import {
  Color,
  Gradient,
} from '../../const';

const App: React.FC = () => {

  return (
    <Header>
      <Logo />
      <ButtonList>
        <TextButton
          width={130}
          height={41}
          gradient={Gradient.CTA_BUTTON_GRADIENT}
          fontSize={13}
          fontColor={Color.BASIC_WHITE}
        >
          Upload file
        </TextButton>
        <IconButton
          width={130}
          height={41}
          gradient={Gradient.GHOST_BUTTON_GRADIENT}
          iconHeight={20}
          iconWidth={20}
          iconSrc={`img/remove-button-icon.svg`}
        />
      </ButtonList>
      <User />
    </Header>
  );
};

export { App };
