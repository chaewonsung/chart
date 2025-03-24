import React from 'react';
import styled from 'styled-components';
import Inner from '../layout/Inner';
import HeaderContent from './HeaderContent';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #fff;
  z-index: 999;
`;

const Space = styled.div`
  height: var(--header-height);
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Inner>
          <HeaderContent />
        </Inner>
      </HeaderBlock>
      <Space />
    </>
  );
};

export default Header;
