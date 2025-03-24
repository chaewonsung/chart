import React from 'react';
import styled, { css } from 'styled-components';
import SectionHeader from '../common/SectionHeader';
import CardList from '../common/Card';
import { Link } from 'react-router';

export const MyCardsBlock = styled.section`
  width: calc(730 / 1110 * 100%);
  display: flex;
  flex-direction: column;
`;

const MyCards = () => {
  return (
    <MyCardsBlock>
      <SectionHeader title="my cards">
        <Link to="/credit-cards">see all</Link>
      </SectionHeader>
      <CardList colorList={['blue', '']} />
    </MyCardsBlock>
  );
};

export default MyCards;
