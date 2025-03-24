import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const ListItemContainer = styled(Container)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  padding: 1.5rem;
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  > *:first-child {
    display: flex;
    align-items: center;
    gap: var(--gap-icon);
  }
`;

export default ListItemContainer;
