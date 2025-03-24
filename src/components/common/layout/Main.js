import React from 'react';
import styled from 'styled-components';
import { media } from '../../../lib/styles/variables';

const MainBlock = styled.main`
  background-color: #f5f7fa;
  padding: var(--main-padding);
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem 3rem;
  min-height: calc(100vh - var(--header-height));
  align-content: flex-start;

  ${media.medium} {
    > * {
      min-width: 100%;
      flex: 0;
    }
  }
`;

const Main = ({ children }) => {
  return <MainBlock>{children}</MainBlock>;
};

export default Main;
