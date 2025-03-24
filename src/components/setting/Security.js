import React from 'react';
import { H3, ToggleSwitch } from './form.style';
import styled from 'styled-components';
import { Input, InputContainer } from '../common/form.style';
import { SaveButton } from './EditProfile';
import { media } from '../../lib/styles/variables';

const StyledInputContainer = styled(InputContainer)`
  grid-template-columns: auto;
`;

const SecurityBlock = styled.form`
  section + section {
    margin-top: 3rem;
  }
`;

const StyledInput = styled(Input)`
  display: block;
  width: 50%;
  ${media.medium} {
    width: 100%;
  }
`;

const Security = () => {
  return (
    <SecurityBlock>
      <section>
        <H3>two-factor authentication</H3>
        <ToggleSwitch>Enable or disable two factor authentication</ToggleSwitch>
      </section>
      <section>
        <H3>change password</H3>
        <StyledInputContainer>
          <div>
            <label htmlFor="">current password</label>
            <StyledInput type="password" placeholder="**********" />
          </div>
          <div>
            <label htmlFor="">new password</label>
            <StyledInput type="password" placeholder="**********" />
          </div>
        </StyledInputContainer>
      </section>
      <SaveButton />
    </SecurityBlock>
  );
};

export default Security;
