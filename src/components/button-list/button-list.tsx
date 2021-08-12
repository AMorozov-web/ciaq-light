import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: min-content;
  height: auto;
  margin: 0;
  padding: 0;
  padding-left: 50px;
  padding-right: 50px;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  width: min-content;
  height: auto;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

interface IListProps {
  children?: React.ReactNode;
}

const ListItem: React.FC<IListProps> = ({ children }) => {

  return (
    <Item>
      {children}
    </Item>
  );
};

const ButtonList: React.FC<IListProps> = ({ children }) => {
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
