import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../../lib/styles/variables';

const AmountBlock = styled.div`
  font-weight: 500;
  &.green {
    color: var(--green-02);
  }
  &.red {
    color: var(--pink-02);
  }

  ${media.large} {
    font-size: 1.2rem;
  }
`;

const Amount = ({ children, color, ...props }) => {
  return (
    <AmountBlock className={color} {...props}>
      {children}
    </AmountBlock>
  );
};

Amount.propTypes = {
  color: PropTypes.oneOf(['red', 'green']),
};
Amount.style = AmountBlock;

export default Amount;
