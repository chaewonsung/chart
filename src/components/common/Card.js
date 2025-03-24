import React from 'react';
import styled, { css } from 'styled-components';
import Container from './Container';
import { media } from '../../lib/styles/variables';

const CardListBlock = styled.div`
  flex: 1;
  > div {
    height: 100%;
    display: flex;
    gap: 3rem;
    min-width: max-content;
  }

  ${media.medium} {
    overflow: auto;
    margin-inline: calc(var(--main-padding) * -1);
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      padding-inline: var(--main-padding);
    }
  }
`;

const CardBlock = styled(Container)`
  position: relative;
  padding: 0;
  font-family: var(--secondary-font);
  flex: 1;
  dl {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr 1fr;
    column-gap: calc(67 / 350 * 100%);
    padding: var(--container-padding);
    padding-bottom: 0;
  }
  dt {
    color: #718ebf;
    margin-bottom: 0.4em;
    font-size: 1.2rem;

    &.balance {
      & + dd {
        font-size: 2rem;
        margin-bottom: 3.3rem;
      }
    }
    &:not(.balance) {
      & + dd {
        font-size: 1.5rem;
      }
    }
    &.holder {
      & + dd {
        text-transform: capitalize;
      }
    }
    &.valid {
      grid-row-start: 3;
    }
  }
  dd {
    font-weight: 600;
  }
  .card-num {
    margin-top: 3.5rem;
    padding: 1em var(--container-padding);
    border-top: 1px solid #dfeaf2;
    font-size: 2.2rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .master {
    flex-shrink: 0;
    position: relative;
    width: 4.4rem;
    height: 3rem;
    > div {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 100%;
      aspect-ratio: 1/1;
      background-color: #9199af;
      opacity: 0.5;
      border-radius: 50%;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        right: 0;
      }
    }
  }
  img {
    position: absolute;
    top: var(--container-padding);
    right: var(--container-padding);
  }

  ${({ color }) =>
    color &&
    css`
      background: ${color === 'blue'
        ? 'linear-gradient(135deg, #4c49ed, #0a06f4)'
        : 'linear-gradient(135deg, #2D60FF, #539BFF)'};
      color: white;
      dt {
        color: #ffffff70;
      }
      .card-num {
        background: linear-gradient(180deg, #ffffff15, transparent);
        border-top: none;
      }
      .master {
        > div {
          background-color: #fff;
        }
      }
    `}

  ${media.large} {
    dt {
      font-size: 1.1rem;
      &.balance {
        & + dd {
          font-size: 1.6rem;
          margin-bottom: 2.3rem;
        }
      }
      &:not(.balance) {
        & + dd {
          font-size: 1.3rem;
        }
      }
    }
    .card-num {
      font-size: 1.5rem;
      margin-top: 2.5rem;
    }
    .master {
      width: 2.7em;
      height: 1.8em;
    }
    img {
      width: 2.9rem;
    }
  }

  ${media.medium} {
    min-width: 26.5rem;
  }
`;

const CardList = ({ colorList, ...props }) => (
  <CardListBlock {...props}>
    <div>
      {colorList.map((color) => (
        <Card key={color} color={color} />
      ))}
    </div>
  </CardListBlock>
);

const Card = ({ color }) => {
  return (
    <CardBlock color={color}>
      <dl>
        <dt className="balance">Balance</dt>
        <dd>$5,756</dd>
        <dt className="holder">CARD HOLDER</dt>
        <dd>eddy cusuma</dd>
        <dt className="valid">VALID THRU</dt>
        <dd>12/22</dd>
      </dl>
      <div className="card-num">
        <span>3778 **** **** 1234</span>
        <div className="master">
          <div></div>
          <div></div>
        </div>
      </div>
      <img src={`/images/card-chip${color ? '' : '-dark'}.png`} alt="" />
    </CardBlock>
  );
};

Card.style = CardBlock;

export default CardList;
