import React from 'react';
import SectionHeader from '../common/SectionHeader';
import styled from 'styled-components';
import CardList from '../common/Card';
import { media } from '../../lib/styles/variables';

const MyCardBlock = styled.section`
  flex: 1;
  width: 0;
  display: flex;
  flex-direction: column;
`;

const StyledCardList = styled(CardList)`
  > div {
    > *:nth-child(2) {
      display: none;
    }
  }

  ${media.medium} {
    > div {
      > *:nth-child(2) {
        display: block;
      }
    }
  }
`;

const MyCard = () => {
  return (
    <MyCardBlock>
      <SectionHeader title="my card">
        <button>see all</button>
      </SectionHeader>
      <StyledCardList colorList={['sky', 'blue']} />
    </MyCardBlock>
  );
};

export default MyCard;
