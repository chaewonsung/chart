import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../lib/styles/variables';

const InfoTextBlock = styled.div`
  line-height: 1.5;
  > div:nth-child(1) {
    font-weight: 500;
  }
  > div:nth-child(2) {
    font-size: 1.5rem;
    color: #718ebf;
  }

  ${media.large} {
    > div:nth-child(1) {
      font-size: 1.3rem;
    }
    > div:nth-child(2) {
      font-size: 1.2rem;
    }
  }
`;

const InfoText = ({ text, ...props }) => {
  return (
    <InfoTextBlock {...props}>
      <div>{text[0]}</div>
      <div>{text[1]}</div>
    </InfoTextBlock>
  );
};

export const CustomInfoText = ({ children, subText, ...props }) => {
  return (
    <InfoTextBlock {...props}>
      {children}
      <div>{subText}</div>
    </InfoTextBlock>
  );
};

InfoText.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string),
};
InfoText.style = InfoTextBlock;

export default InfoText;
