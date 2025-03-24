import React from 'react';
import Summary from '../common/Summary';
import User from '../../assets/User.svg';
import Bag from '../../assets/Bag.svg';
import Graph from '../../assets/Graph.svg';
import EngineeringSolid from '../../assets/EngineeringSolid.svg';
import styled from 'styled-components';
import { overflowContainer } from '../../lib/styles/variables';

const data = [
  {
    id: 1,
    text: ['Personal Loans', '$50,000'],
    icon: { Icon: User, color: 'blue' },
  },
  {
    id: 2,
    text: ['Corporate Loans', '$100,000'],
    icon: { Icon: Bag, color: 'yellow' },
  },
  {
    id: 3,
    text: ['Business Loans', '$500,000'],
    icon: { Icon: Graph, color: 'pink' },
  },
  {
    id: 4,
    text: ['Custom Loans', 'Choose Money'],
    icon: { Icon: EngineeringSolid, color: 'green' },
  },
];

const LoansBlock = styled.section`
  width: 100%;
  > div {
    ${overflowContainer}
  }
`;

const Loans = () => {
  return (
    <LoansBlock>
      <div>
        <Summary data={data} />
      </div>
    </LoansBlock>
  );
};

export default Loans;
