import React from 'react';
import styled from 'styled-components';

const InnerBlock = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Inner = ({ children, ...props }) => {
  return <InnerBlock {...props}>{children}</InnerBlock>;
};

export default Inner;
