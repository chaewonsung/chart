import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ListItemContainer from '../common/ListItemContainer';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import InfoText from '../common/list-item-composition/InfoText';
import {
  BlueTextButton,
  ButtonForTable,
} from '../common/buttons/buttons.style';
import styled from 'styled-components';
import Loan from '../../assets/Loan.svg';
import Bag from '../../assets/Bag.svg';
import Graph from '../../assets/Graph.svg';
import User from '../../assets/User.svg';
import LifeInsurance from '../../assets/LifeInsurance.svg';
import { media } from '../../lib/styles/variables';
import { Medium, NotMedium } from '../common/layout/responsive';

const BankServicesListBlock = styled.section`
  width: 100%;
`;

const StyledListItemContainer = styled(ListItemContainer)`
  ${media.medium} {
    > *:nth-child(2),
    > *:nth-child(3),
    > *:nth-child(4) {
      display: none;
    }
  }
`;

const ViewButton = styled(ButtonForTable)`
  width: 15rem;
  color: var(--blue-06);
  border-color: var(--blue-06);

  ${media.large} {
    width: 12rem;
  }
`;

const data = [
  {
    id: 1,
    text: ['Business loans', 'It is a long established'],
    icon: { Icon: Loan, color: 'pink' },
  },
  {
    id: 2,
    text: ['Checking accounts', 'It is a long established'],
    icon: { Icon: Bag, color: 'yellow' },
  },
  {
    id: 3,
    text: ['Savings accounts', 'It is a long established'],
    icon: { Icon: Graph, color: 'pink' },
  },
  {
    id: 4,
    text: ['Business loans', 'It is a long established'],
    icon: { Icon: User, color: 'blue' },
  },
  {
    id: 5,
    text: ['Life Insurance', 'It is a long established'],
    icon: { Icon: LifeInsurance, color: 'green' },
  },
  {
    id: 6,
    text: ['Business loans', 'It is a long established'],
    icon: { Icon: Loan, color: 'pink' },
  },
];

const BankServicesList = () => {
  return (
    <BankServicesListBlock>
      <SectionHeader title="bank services list" />
      <div>
        {data.map(({ id, text, icon }) => (
          <StyledListItemContainer key={id}>
            <div>
              <IconWrapper curved color={icon.color}>
                <icon.Icon />
              </IconWrapper>
              <InfoText text={text} />
            </div>
            <InfoText text={['Lorem Ipsum', 'Many publishing']} />
            <InfoText text={['Lorem Ipsum', 'Many publishing']} />
            <InfoText text={['Lorem Ipsum', 'Many publishing']} />
            <NotMedium>
              <ViewButton>View Details</ViewButton>
            </NotMedium>
            <Medium>
              <BlueTextButton>View Details</BlueTextButton>
            </Medium>
          </StyledListItemContainer>
        ))}
      </div>
    </BankServicesListBlock>
  );
};

export default BankServicesList;
