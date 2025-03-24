import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Container from '../common/Container';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import Apple from '../../assets/Apple.svg';
import Samsung from '../../assets/Samsung.svg';
import Tesla from '../../assets/Tesla.svg';
import InfoText, {
  CustomInfoText,
} from '../common/list-item-composition/InfoText';
import Amount from '../common/list-item-composition/Amount';
import styled from 'styled-components';
import ListItemContainer from '../common/ListItemContainer';
import { Medium, NotMedium } from '../common/layout/responsive';
import { media } from '../../lib/styles/variables';

const data = [
  {
    id: 1,
    corp: { name: 'apple store', industry: 'E-commerce, Marketplace' },
    investmentValue: 54000,
    returnValue: { value: '+16%', color: 'green' },
    icon: { Icon: Apple, color: 'pink' },
  },
  {
    id: 2,
    corp: { name: 'samsung mobile', industry: 'E-commerce, Marketplace' },
    investmentValue: 25300,
    returnValue: { value: '-4%', color: 'red' },
    icon: { Icon: Samsung, color: 'blue' },
  },
  {
    id: 3,
    corp: { name: 'tesla motors', industry: 'electric vehicles' },
    investmentValue: 8200,
    returnValue: { value: '+25%', color: 'green' },
    icon: { Icon: Tesla, color: 'yellow' },
  },
];

const MyInvestmentBlock = styled.section`
  width: calc(635 / 1110 * 100%);
  display: flex;
  flex-direction: column;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const StyledContainer = styled(ListItemContainer)`
  grid-template-columns: auto 1.5fr 1fr auto;
  gap: 2rem;

  ${media.medium} {
    grid-template-columns: auto 1fr auto;
  }
`;

const MyInvestment = () => {
  return (
    <MyInvestmentBlock>
      <SectionHeader title="my investment" />
      <div>
        {data.map(({ id, corp, investmentValue, returnValue, icon }) => (
          <StyledContainer key={id}>
            <IconWrapper curved color={icon.color}>
              <icon.Icon />
            </IconWrapper>
            <InfoText text={[corp.name, corp.industry]} />
            <NotMedium>
              <InfoText
                text={[
                  '$' + investmentValue.toLocaleString(),
                  'investment value',
                ]}
              />
              <CustomInfoText subText="return value">
                <Amount color={returnValue.color}>{returnValue.value}</Amount>
              </CustomInfoText>
            </NotMedium>
            <Medium>
              <Amount color={returnValue.color}>{returnValue.value}</Amount>
            </Medium>
          </StyledContainer>
        ))}
      </div>
    </MyInvestmentBlock>
  );
};

export default MyInvestment;
