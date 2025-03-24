import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

const TabsBlock = styled.div`
  border-bottom: 1px solid #ebeef2;
  white-space: nowrap;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    width: 15rem;
    text-align: center;
    color: var(--blue-06);
    font-weight: 500;
    padding-bottom: 1rem;
    &.selected {
      position: relative;
      color: var(--blue-09);
      overflow: hidden;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 6px;
        transform: translateY(50%);
        border-radius: 99px;
        background-color: var(--blue-09);
      }
    }
  }

  ${media.large} {
    button {
      font-size: 1.4rem;
      width: 12rem;
    }
  }
`;

const Tabs = ({ tabList, state, setState }) => {
  return (
    <TabsBlock>
      {tabList.map((tab, i) => (
        <button
          className={state === i && 'selected'}
          onClick={() => setState(i)}
        >
          {tab}
        </button>
      ))}
    </TabsBlock>
  );
};

export default Tabs;
