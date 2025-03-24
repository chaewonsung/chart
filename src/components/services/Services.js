import React from 'react';
import Summary from '../common/Summary';
import LifeInsurance from '../../assets/LifeInsurance.svg';
import BagSimple from '../../assets/BagSimple.svg';
import Shield from '../../assets/Shield.svg';
import styled from 'styled-components';
import { overflowContainer } from '../../lib/styles/variables';

const data = [
  {
    id: 1,
    text: ['Life Insurance', 'Unlimited protection'],
    icon: { Icon: LifeInsurance, color: 'blue' },
  },
  {
    id: 2,
    text: ['Shopping', 'Buy. Think. Grow.'],
    icon: { Icon: BagSimple, color: 'yellow' },
  },
  {
    id: 3,
    text: ['Safety', 'We are your allies'],
    icon: { Icon: Shield, color: 'green' },
  },
];

const ServicesBlock = styled.section`
  width: 100%;
  > div {
    ${overflowContainer}
  }
`;

const Services = () => {
  return (
    <ServicesBlock>
      <div>
        <Summary textReverse data={data} />
      </div>
    </ServicesBlock>
  );
};

export default Services;
