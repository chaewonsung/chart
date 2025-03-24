import React from 'react';
import Section from '../common/Section';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import Renew from '../../assets/Renew.svg';
import Engineering from '../../assets/Engineering.svg';
import Person from '../../assets/Person.svg';
import InfoText from '../common/list-item-composition/InfoText';
import Amount from '../common/list-item-composition/Amount';
import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

const DATA = [
  {
    id: 1,
    name: 'spotify subscription',
    date: '25 Jan 2021',
    sort: 'shopping',
    card: '1234',
    state: 'pending',
    amount: { amount: '-$150', color: 'red' },
    icon: { Icon: Renew, color: 'green' },
  },
  {
    id: 2,
    name: 'mobile service',
    date: '25 Jan 2021',
    sort: 'service',
    card: '1234',
    state: 'completed',
    amount: { amount: '-$340', color: 'red' },
    icon: { Icon: Engineering, color: 'blue' },
  },
  {
    id: 3,
    name: 'emily willson',
    date: '25 Jan 2021',
    sort: 'transfer',
    card: '1234',
    state: 'completed',
    amount: { amount: '+$780', color: 'green' },
    icon: { Icon: Person, color: 'pink' },
  },
];

const StyledSection = styled(Section)`
  width: calc(730 / 1110 * 100%);
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1.7fr) 1fr 1fr 1fr 55px;
  align-items: center;
  text-transform: capitalize;
  ${InfoText.style} {
    padding-inline: var(--gap-icon) 1rem;
    > * {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  i {
    color: var(--text-blue);
  }
  ${Amount.style} {
    text-align: end;
  }

  ${media.large} {
    i {
      font-size: 1.2rem;
    }
  }
  ${media.medium} {
    grid-template-columns: auto 1fr auto;
    i {
      display: none;
    }
  }
`;

const LastTransaction = () => {
  return (
    <StyledSection header="last transaction">
      <ul>
        {DATA.map(({ id, name, date, sort, card, state, amount, icon }) => (
          <li key={id}>
            <ListItem>
              <IconWrapper curved color={icon.color}>
                <icon.Icon />
              </IconWrapper>
              <InfoText text={[name, date]} />
              <i>{sort}</i>
              <i>{card} ****</i>
              <i>{state}</i>
              <Amount color={amount.color}>{amount.amount}</Amount>
            </ListItem>
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default LastTransaction;
