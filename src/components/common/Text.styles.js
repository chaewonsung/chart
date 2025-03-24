import styled from 'styled-components';
import { media, rem } from '../../lib/styles/variables';

export const Title1 = styled.h1`
  font-size: ${rem(28)};
  font-weight: 600;

  ${media.large} {
    font-size: 2.5rem;
  }
  ${media.medium} {
    font-size: 2rem;
  }
`;

export const Title2 = styled.h2`
  font-size: ${rem(22)};
  font-weight: 600;

  ${media.large} {
    font-size: 1.8rem;
  }
`;

export const Title3 = styled.h3`
  font-size: ${rem(18)};
  font-weight: 500;

  ${media.large} {
    font-size: 1.6rem;
  }
`;

export const Title4 = styled.h4`
  font-size: ${rem(20)};
  font-weight: 600;
`;

export const RegularText = styled.span`
  font-size: ${rem(15)};
`;

export const SmallText = styled.span`
  font-size: ${rem(13)};
  ${media.large} {
    font-size: 1.2rem;
  }
`;

export const ButtonLabelLarge = styled.span`
  font-size: ${rem(18)};
  font-weight: 500;
`;

export const ButtonLabelSmall = styled.span`
  font-size: ${rem(15)};
  font-weight: 500;
`;
