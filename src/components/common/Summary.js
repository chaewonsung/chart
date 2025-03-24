import React from 'react';
import { FlexContainer } from './Container';
import styled, { css } from 'styled-components';
import IconWrapper from './list-item-composition/IconWrapper';
import { media } from '../../lib/styles/variables';

const SummaryBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
  ${media.medium} {
    gap: 15px;
  }
`;

const firstTextStyle = css`
  color: var(--text-blue);
  ${media.large} {
    font-size: 1.2rem;
  }
`;

const secondTextStyle = css`
  font-weight: 600;
  font-size: 2rem;
  ${media.large} {
    font-size: 1.6rem;
  }
`;

const StyledContainer = styled(FlexContainer)`
  padding: 2.5rem 1.5rem;
  flex: 1;

  ${media.medium} {
    min-width: max-content;
  }
`;

const Content = styled.div`
  display: flex;
  gap: var(--gap-icon);
  align-items: center;
  > *:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .text {
    div {
      ${firstTextStyle}
    }
    span {
      ${secondTextStyle}
    }
  }
  .text-reverse {
    div {
      ${secondTextStyle}
    }
    span {
      ${firstTextStyle}
    }
  }

  ${media.large} {
    > *:last-child {
      gap: 0.4rem;
    }
  }
`;

const Summary = ({ data, textReverse, ...props }) => {
  return (
    <SummaryBlock {...props}>
      {data.map(({ id, text, icon }) => (
        <StyledContainer key={id}>
          <Content>
            <IconWrapper color={icon.color}>
              <icon.Icon />
            </IconWrapper>
            <div className={textReverse ? 'text-reverse' : 'text'}>
              <div>{text[0]}</div>
              <span>{text[1]}</span>
            </div>
          </Content>
        </StyledContainer>
      ))}
    </SummaryBlock>
  );
};

export default Summary;
