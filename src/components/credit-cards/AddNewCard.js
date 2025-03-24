import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import { ButtonForForm, Input, InputContainer } from '../common/form.style';
import { media } from '../../lib/styles/variables';

const StyledSection = styled(Section)`
  width: calc(730 / 1110 * 100%);
  p {
    color: var(--text-blue);
    line-height: 2;
    margin-bottom: 3rem;
  }

  ${media.large} {
    p {
      font-size: 1.3rem;
    }
  }
`;

const AddNewCard = () => {
  return (
    <StyledSection header="add new card">
      <div>
        <p>
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <form action="">
          <InputContainer>
            <div>
              <label htmlFor="type">Card Type</label>
              <Input id="type" type="text" placeholder="Classic" />
            </div>
            <div>
              <label htmlFor="name">Name On Card</label>
              <Input id="name" type="text" placeholder="My Cards" />
            </div>
            <div>
              <label htmlFor="num">Card Number</label>
              <Input id="num" type="number" placeholder="**** **** **** ****" />
            </div>
            <div>
              <label htmlFor="date">Expiration Date</label>
              <Input id="date" type="text" placeholder="25 January 2025" />
            </div>
          </InputContainer>
          <ButtonForForm>Add Card</ButtonForForm>
        </form>
      </div>
    </StyledSection>
  );
};

export default AddNewCard;
