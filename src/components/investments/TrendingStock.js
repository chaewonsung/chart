import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import Table from '../common/Table';
import Amount from '../common/list-item-composition/Amount';
import { media } from '../../lib/styles/variables';

const StyledTable = styled(Table)`
  ${media.large} {
    font-size: 1.2rem;
  }
`;

const Tbody = styled.tbody`
  text-transform: capitalize;
  td {
    padding: 1.4rem 0;
    &.amount {
      width: 0;
    }
  }
`;

const data = [
  {
    id: 1,
    name: 'trivago',
    price: 520,
    amount: { value: '+5%', color: 'green' },
  },
  {
    id: 2,
    name: 'canon',
    price: 480,
    amount: { value: '+10%', color: 'green' },
  },
  {
    id: 3,
    name: 'uber food',
    price: 350,
    amount: { value: '-3%', color: 'red' },
  },
  {
    id: 4,
    name: 'nokia',
    price: 940,
    amount: { value: '+2%', color: 'green' },
  },
  {
    id: 5,
    name: 'tiktok',
    price: 670,
    amount: { value: '-12%', color: 'red' },
  },
];

const TrendingStock = () => {
  return (
    <Section grow header="trending stock">
      <StyledTable head={['SL No', 'Name', 'Price', 'Return']}>
        <Tbody>
          {data.map(({ id, name, price, amount }) => (
            <tr key={id}>
              <td>0{id}.</td>
              <td>{name}</td>
              <td>${price}</td>
              <td className="amount">
                <Amount color={amount.color}>{amount.value}</Amount>
              </td>
            </tr>
          ))}
        </Tbody>
      </StyledTable>
    </Section>
  );
};

export default TrendingStock;
