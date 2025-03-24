import React from 'react';
import styled, { css } from 'styled-components';
import SectionHeader from './SectionHeader';
import Container from './Container';

const SectionBlock = styled.section`
  display: flex;
  flex-direction: column;
  ${({ grow }) =>
    grow &&
    css`
      flex: 1;
      width: 0;
    `}
`;
const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    width: 100%;
  }
`;

const Section = ({ header, children, grow, ...props }) => {
  return (
    <SectionBlock {...props} grow={grow}>
      <SectionHeader title={header} />
      <StyledContainer>{children}</StyledContainer>
    </SectionBlock>
  );
};

export default Section;
