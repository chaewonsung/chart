import React from 'react';
import styled from 'styled-components';
import Search from '../../../assets/Search.svg';
import { media } from '../../../lib/styles/variables';

const SearchFormBlock = styled.form`
  padding: 0 1.2em;
  background-color: #f5f7fa;
  border-radius: 99px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.5rem;
  input {
    flex: 1;
    color: #8ba3cb;
  }
  svg {
    height: 1em;
  }

  ${media.large} {
    height: 4rem;
  }
`;

const SearchForm = ({ ...props }) => {
  return (
    <SearchFormBlock action="" {...props}>
      <Search />
      <input type="search" placeholder="Search for something" />
    </SearchFormBlock>
  );
};

export default SearchForm;
