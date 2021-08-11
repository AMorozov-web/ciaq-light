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
  children ?: React.ReactNode;
}

const ListItem : React.FC<IListProps> = ({ children }) => {

  return (
    <Item>
      {children}
    </Item>
  );
};

const ButtonList : React.FC<IListProps> = ({ children }) => {
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
