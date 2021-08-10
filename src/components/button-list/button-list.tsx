import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: min-content;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  width: min-content;
  height: min-content;
`;

interface IListProps {
  children : JSX.Element | JSX.Element[];
}

const ListItem = ({ children } : IListProps) : React.ReactElement => {

  return (
    <Item>
      {children}
    </Item>
  );
};

const ButtonList = ({ children } : IListProps) : React.ReactElement => {

  return (
    <List>
      {React.Children.map(
        children,
        (child) => <ListItem>{child}</ListItem>,
      )}
    </List>
  );
};

export { ButtonList };
