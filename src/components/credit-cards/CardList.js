import React from 'react';
import SectionHeader from '../common/SectionHeader';
import styled from 'styled-components';
import ListItemContainer from '../common/ListItemContainer';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import CreditCard from '../../assets/CreditCard.svg';
import InfoText from '../common/list-item-composition/InfoText';
import { media } from '../../lib/styles/variables';
import { NotMedium } from '../common/layout/responsive';
import { BlueTextButton } from '../common/buttons/buttons.style';

const CardListBlock = styled.section`
  width: 0;
  flex: 1;
`;
const Container = styled(ListItemContainer)`
  justify-content: space-between;
  > div:first-child {
    display: flex;
    align-items: center;
    gap: var(--gap-icon);
  }
  @media (max-width: 630px) {
    > *:nth-child(2),
    > *:nth-child(3) {
      display: none;
    }
  }
`;

const CardList = () => {
  return (
    <CardListBlock>
      <SectionHeader title="card list" />
      <div>
        {[...new Array(3)].map((_, i) => (
          <Container>
            <div>
              <IconWrapper color={['blue', 'pink', 'yellow'][i]}>
                <CreditCard />
              </IconWrapper>
              <InfoText text={['Card Type', 'Secondary']} />
            </div>
            <InfoText text={['Bank', 'DBL Bank']} />
            <InfoText text={['Card Number', '**** **** 5600']} />
            <InfoText text={['Namain Card', 'William']} />
            <BlueTextButton>View Details</BlueTextButton>
          </Container>
        ))}
      </div>
    </CardListBlock>
  );
};

export default CardList;
