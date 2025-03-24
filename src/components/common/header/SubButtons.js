import React from 'react';
import styled from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';
import Search from '../../../assets/Search.svg';
import Settings from '../../../assets/Settings.svg';
import Notification from '../../../assets/Notification.svg';
import SearchForm from './SearchForm';

const SubButtonsBlock = styled.div`
  display: flex;
  gap: ${rem(30)};
  > * {
    height: ${rem(50)};
    background-color: #f5f7fa;
    border-radius: 99px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      height: 50%;
    }
  }
  > button {
    aspect-ratio: 1/1;
  }

  ${media.large} {
    > * {
      height: 4rem;
    }
  }
`;

const StyledSearchForm = styled(SearchForm)`
  width: 25.5rem;
`;

const SubButtons = () => {
  return (
    <SubButtonsBlock>
      <StyledSearchForm />
      <button>
        <Settings />
      </button>
      <button>
        <Notification />
      </button>
    </SubButtonsBlock>
  );
};

export default SubButtons;
