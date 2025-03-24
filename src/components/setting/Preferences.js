import React, { useCallback, useState } from 'react';
import { Input, InputContainer } from '../common/form.style';
import { SaveButton } from './EditProfile';
import styled from 'styled-components';
import { H3, ToggleSwitch } from './form.style';

const Notification = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 7rem;
  }
`;

const Preferences = () => {
  return (
    <form>
      <InputContainer>
        <div>
          <label htmlFor="currency">Currency</label>
          <Input id="currency" type="text" placeholder="USD" />
        </div>
        <div>
          <label htmlFor="time-zone">time zone</label>
          <Input
            id="time-zone"
            type="text"
            placeholder="(GMT-12:00) International Date Line West"
          />
        </div>
      </InputContainer>
      <Notification>
        <H3>Notification</H3>
        <div>
          <ToggleSwitch check>I send or receive digita currency</ToggleSwitch>
          <ToggleSwitch>I receive merchant order</ToggleSwitch>
          <ToggleSwitch check>
            There are recommendation for my account
          </ToggleSwitch>
        </div>
      </Notification>
      <SaveButton />
    </form>
  );
};

export default Preferences;
