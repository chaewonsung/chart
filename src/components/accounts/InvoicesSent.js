import React from 'react';
import Section from '../common/Section';
import Apple from '../../assets/Apple.svg';
import Person from '../../assets/Person.svg';
import Playstation from '../../assets/Playstation.svg';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import InfoText from '../common/list-item-composition/InfoText';
import styled from 'styled-components';
import { FlexContainer } from '../common/Container';
import Amount from '../common/list-item-composition/Amount';

const DATA = [
  {
    id: 1,
    name: 'apple store',
    time: '5h',
    amount: '450',
    icon: { Icon: Apple, color: 'green' },
  },
  {
    id: 2,
    name: 'michael',
    time: '2 days',
    amount: '160',
    icon: { Icon: Person, color: 'yellow' },
  },
  {
    id: 3,
    name: 'playstation',
    time: '5 days',
    amount: '1085',
    icon: { Icon: Playstation, color: 'blue' },
  },
  {
    id: 4,
    name: 'william',
    time: '10 days',
    amount: '90',
    icon: { Icon: Person, color: 'pink' },
  },
];

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-icon);
  ${InfoText.style} {
    flex: 1;
    min-width: 0;
    > * {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    > *:nth-child(1) {
      color: var(--gray-01);
      text-transform: capitalize;
    }
  }
`;

const StyledAmount = styled(Amount)`
  color: var(--text-blue);
`;

const InvoicesSent = () => {
  return (
    <Section grow header="invoices sent">
      <Ul>
        {DATA.map(({ id, name, time, amount, icon }) => (
          <li key={id}>
            <ListItem>
              <IconWrapper curved color={icon.color}>
                <icon.Icon />
              </IconWrapper>
              <InfoText text={[name, time + ' ago']} />
              <StyledAmount>${amount}</StyledAmount>
            </ListItem>
          </li>
        ))}
      </Ul>
    </Section>
  );
};

export default InvoicesSent;
