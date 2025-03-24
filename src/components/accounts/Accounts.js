import React from 'react';
import Container, { FlexContainer } from '../common/Container';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import Balance from '../../assets/Balance.svg';
import Income from '../../assets/Income.svg';
import Expense from '../../assets/Expense.svg';
import Saving from '../../assets/Saving.svg';
import styled from 'styled-components';
import Summary from '../common/Summary';
import { media } from '../../lib/styles/variables';

const data = [
  {
    id: 1,
    text: ['My Balance', '$12,750'],
    icon: { Icon: Balance, color: 'yellow' },
  },
  {
    id: 2,
    text: ['Income', '$5,600'],
    icon: { Icon: Income, color: 'blue' },
  },
  {
    id: 3,
    text: ['Expense', '$3,460'],
    icon: { Icon: Expense, color: 'pink' },
  },
  {
    id: 4,
    text: ['Total Saving', '$7,920'],
    icon: { Icon: Saving, color: 'green' },
  },
];

const AccountsBlock = styled.section`
  width: 100%;
  ${media.medium} {
    > div {
      flex-wrap: wrap;
      > div {
        min-width: 40%;
      }
    }
  }
`;

const Accounts = () => {
  return (
    <AccountsBlock>
      <Summary data={data} />
    </AccountsBlock>
  );
};

export default Accounts;
