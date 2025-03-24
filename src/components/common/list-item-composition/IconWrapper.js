import React from 'react';
import styled, { css } from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';
import PropTypes from 'prop-types';

const colors = {
  yellow: ['#FFF5D9', '#FFBB38'],
  blue: ['#E7EDFF', '#396AFF'],
  green: ['#DCFAF8', '#16DBCC'],
  pink: ['#FFE0EB', '#FF82AC'],
};

const IconWrapperBlock = styled.div`
  width: 55px;
  aspect-ratio: 1/1;
  border-radius: ${({ curved }) => (curved ? '20px' : '50%')};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
      width: 28px;
      height: 28px;
    }

  ${({ color }) => css`
    background-color: ${colors[color][0]};
    svg {
      color: ${colors[color][1]};
    }
  `}

  ${media.large} {
    width: 40px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const IconWrapper = ({ children, color, curved, ...props }) => {
  return (
    <IconWrapperBlock curved={curved} color={color} {...props}>
      {children}
    </IconWrapperBlock>
  );
};

IconWrapper.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
};
IconWrapper.style = IconWrapperBlock;

export default IconWrapper;
