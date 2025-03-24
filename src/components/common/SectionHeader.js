import React from 'react';
import { Title2 } from './Text.styles';
import styled, { css } from 'styled-components';
import { media, rem } from '../../lib/styles/variables';

const SectionHeaderBlock = styled.header`
  margin-bottom: ${rem(20)};
  ${({ haschild }) =>
    haschild &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      > * {
        font-size: ${rem(18)};
        font-weight: 600;
        ${media.large} {
          font-size: 1.5rem;
        }
      }
    `}
  * {
    text-transform: capitalize;
  }
`;

const SectionHeader = ({ title, children, ...props }) => {
  return (
    <SectionHeaderBlock haschild={!!children} {...props}>
      <Title2>{title}</Title2>
      {children}
    </SectionHeaderBlock>
  );
};

export default SectionHeader;
