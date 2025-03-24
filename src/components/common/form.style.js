import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.2rem 3rem;
  margin-bottom: 3rem;
  text-transform: capitalize;

  ${media.large} {
    font-size: 1.3rem;
  }
  ${media.medium} {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 1px solid var(--blue-04);
  padding: 16px 20px;
  border-radius: 15px;
  font-size: 1.5rem;
  color: var(--text-blue);
  width: 100%;
  margin-top: 1.1rem;

  ${media.large} {
    font-size: 1.3rem;
    padding: 13px 15px;
  }
`;

export const ButtonForForm = styled.button`
  background-color: var(--blue-09);
  border-radius: 10px;
  color: white;
  padding: 0.7em 2em;
  font-size: 1.8rem;
  text-align: center;
  ${media.large} {
    font-size: 1.5rem;
  }
`;
