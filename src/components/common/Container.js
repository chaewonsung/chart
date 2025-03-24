import React from 'react';
import styled from 'styled-components';
import { media, rem } from '../../lib/styles/variables';

const Container = styled.div`
  --container-padding: ${rem(20)};
  --container-padding-block: 2rem;
  --container-padding-inline: 3rem;

  border-radius: 25px;
  border: 1px solid #dfeaf2;
  padding: var(--container-padding-block) var(--container-padding-inline);
  background-color: #fff;
  flex: 1;

  ${media.large} {
    --container-padding-block: 15px;
    --container-padding-inline: 15px;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Container;
