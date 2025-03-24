import React from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

export const H3 = styled.h3`
  margin-bottom: 2rem;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.7rem;

  ${media.large} {
    font-size: 1.4rem;
  }
`;

const ToggleSwitchButtonBlock = styled.button`
  background-color: #dfeaf2;
  border-radius: 99px;
  padding: 0.2rem;
  width: 5.4rem;
  box-sizing: content-box;
  transition: all.2s;
  > div {
    width: 50%;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 50%;
    transition: all.2s;
  }
  &.checked {
    background-color: #16dbcc;
    > div {
      transform: translateX(100%);
    }
  }

  ${media.large} {
    width: 4.4rem;
  }
`;

const ToggleSwitchButton = ({ checked, ...props }) => {
  return (
    <ToggleSwitchButtonBlock
      type="button"
      className={checked ? 'checked' : ''}
      {...props}
    >
      <div></div>
    </ToggleSwitchButtonBlock>
  );
};

const ToggleSwitchBlock = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  > div {
  }
  ${media.large} {
    font-size: 1.3rem;
  }
`;

export const ToggleSwitch = ({ children, check }) => {
  const [checked, setChecked] = useState(!!check);
  const handleClick = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  return (
    <ToggleSwitchBlock>
      <ToggleSwitchButton onClick={handleClick} checked={checked} />
      <div onClick={handleClick}>{children}</div>
    </ToggleSwitchBlock>
  );
};
