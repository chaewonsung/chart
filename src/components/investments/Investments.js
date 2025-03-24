import React from 'react';
import MoneyPouch from '../../assets/MoneyPouch.svg';
import PieChart from '../../assets/PieChart.svg';
import Return from '../../assets/Return.svg';
import Summary from '../common/Summary';
import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

const data = [
  {
    id: 1,
    text: ['Total Invested Amount', '$150,000'],
    icon: { Icon: MoneyPouch, color: 'green' },
  },
  {
    id: 2,
    text: ['Number of Investments', '1,250'],
    icon: { Icon: PieChart, color: 'pink' },
  },
  {
    id: 3,
    text: ['Rate of Return', '+5.80%'],
    icon: { Icon: Return, color: 'blue' },
  },
];

const InvestmentsBlock = styled.section`
  width: 100%;
  > div {
    overflow: auto;
    margin-inline: calc(var(--main-padding) * -1);
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      min-width: fit-content;
      padding-inline: var(--main-padding);
    }
  }
`;

const Investments = () => {
  return (
    <InvestmentsBlock>
      <div>
        <Summary data={data} />
      </div>
    </InvestmentsBlock>
  );
};

export default Investments;
