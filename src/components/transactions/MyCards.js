import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { MyCardsBlock } from '../dashboard/MyCards';
import CardList from '../common/Card';

const MyCards = () => {
  return (
    <MyCardsBlock>
      <SectionHeader title="my cards">
        <button>+Add Card</button>
      </SectionHeader>
      <CardList colorList={['blue', '']} />
    </MyCardsBlock>
  );
};

export default MyCards;
