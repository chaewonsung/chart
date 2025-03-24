import styled from 'styled-components';
import { media } from '../../../lib/styles/variables';

export const ButtonForTable = styled.button`
  font-size: 1.5rem;
  color: #123288;
  border: 1px solid #123288;
  border-radius: 99px;
  width: 10rem;
  min-width: 0;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.large} {
    font-size: 1.3rem;
    width: 8rem;
    height: 3rem;
  }
  ${media.medium} {
    font-size: 1.2rem;
    width: 7rem;
  }
`;

export const BlueTextButton = styled.button`
  color: var(--blue-09);
  font-weight: 500;
  font-size: 1.5rem;
  ${media.large} {
    font-size: 1.2rem;
  }
`;
