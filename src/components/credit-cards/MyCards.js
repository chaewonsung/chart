import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import styled from 'styled-components';
import CardList from '../common/Card';

const MyCardsBlock = styled.section`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  gap: 3rem;
  > * {
    flex: 1;
  }
`;

const MyCards = () => {
  return (
    <MyCardsBlock>
      <SectionHeader title="my cards" />
      <CardList colorList={['sky', 'blue', '']} />
    </MyCardsBlock>
  );
};

export default MyCards;
