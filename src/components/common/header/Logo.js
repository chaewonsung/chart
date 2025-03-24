import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { rem } from '../../../lib/styles/variables';

const LogoBlock = styled(Link)`
  font-size: ${rem(25)};
  display: flex;
  align-items: center;
  gap: ${rem(9)};
  font-weight: 800;
  img {
    width: ${rem(36)};
    aspect-ratio: 1/1;
  }
`;

const Logo = () => {
  return (
    <LogoBlock to="/">
      <img src="/images/logo.png" alt="" />
      BankDash.
    </LogoBlock>
  );
};

export default Logo;
