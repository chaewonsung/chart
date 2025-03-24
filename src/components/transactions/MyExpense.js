import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import { SmallText } from '../common/Text.styles';
import { media } from '../../lib/styles/variables';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr auto;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.9rem 5.2%;
  text-align: center;
  > div {
    position: relative;
    background-color: #edf0f7;
    border-radius: 10px;
    align-self: end;
    > span {
      position: absolute;
      bottom: 105%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      font-weight: 500;
      font-size: 1.4rem;
    }
    &.point {
      background-color: var(--green-02);
      > span {
        opacity: 1;
      }
    }
    &:nth-of-type(1) {
      height: 50%;
    }
    &:nth-of-type(2) {
      height: 90%;
    }
    &:nth-of-type(3) {
      height: 55%;
    }
    &:nth-of-type(4) {
      height: 30%;
    }
    &:nth-of-type(5) {
      height: 70%;
    }
    &:nth-of-type(6) {
      height: 60%;
    }
  }

  ${media.large} {
    > div {
      > span {
        font-size: 1.2rem;
      }
    }
  }

  ${media.medium} {
    height: 210px;
    max-width: 300px;
  }
`;

const Label = styled(SmallText)`
  color: var(--blue-06);
`;

const MyExpense = () => {
  return (
    <Section header="my expense" grow>
      <Container>
        {['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map((v) => (
          <>
            <div key={v} className={v === 'Dec' && 'point'}>
              <span>$12,500</span>
            </div>
            <Label>{v}</Label>
          </>
        ))}
      </Container>
    </Section>
  );
};

export default MyExpense;
