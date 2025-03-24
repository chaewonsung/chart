import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../common/SectionHeader';
import Container from '../common/Container';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import Dollar from '../../assets/Dollar.svg';
import Paypal from '../../assets/Paypal.svg';
import MyCard from '../../assets/MyCard.svg';
import InfoText from '../common/list-item-composition/InfoText';
import Amount from '../common/list-item-composition/Amount';
import { media, rem } from '../../lib/styles/variables';

const RecentTransactionBlock = styled.section`
  flex: 1 0 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;

  > * {
    flex: 0 0 auto;
  }
  ${IconWrapper.style} {
    margin-right: 17px;
  }
  ${InfoText.style} {
    flex: 1 1 0;
    min-width: 0;
    margin-right: 10px;
    > div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  ${media.large} {
    ${IconWrapper.style} {
      margin-right: var(--gap-icon);
    }
    ${InfoText.style} {
    }
  }
`;

const data = [
  {
    id: 1,
    text: ['Deposit from my Card', '28 January 2021'],
    icon: { Icon: MyCard, color: 'yellow' },
    amount: { amount: '-$850', color: 'red' },
  },
  {
    id: 2,
    text: ['Deposit Paypal', '25 January 2021'],
    icon: { Icon: Paypal, color: 'blue' },
    amount: { amount: '+$2,500', color: 'green' },
  },
  {
    id: 1,
    text: ['Jemi Wilson', '21 January 2021'],
    icon: { Icon: Dollar, color: 'green' },
    amount: { amount: '+$5,400', color: 'green' },
  },
];

const RecentTransaction = () => {
  return (
    <RecentTransactionBlock>
      <SectionHeader title="recent transaction" />
      <StyledContainer>
        <Ul>
          {data.map(({ id, text, icon, amount }) => (
            <li key={id}>
              <ListItem>
                <IconWrapper color={icon.color}>
                  <icon.Icon />
                </IconWrapper>
                <InfoText text={text} />
                <Amount color={amount.color}>{amount.amount}</Amount>
              </ListItem>
            </li>
          ))}
        </Ul>
      </StyledContainer>
    </RecentTransactionBlock>
  );
};

export default RecentTransaction;
