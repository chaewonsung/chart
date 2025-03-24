import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Container from '../common/Container';
import styled from 'styled-components';
import Arrow from '../../assets/Arrow.svg';
import Amount from '../common/list-item-composition/Amount';
import ChevronRight from '../../assets/ChevronRight.svg';
import { ButtonLabelSmall } from '../common/Text.styles';
import Table from '../common/Table';
import { ButtonForTable } from '../common/buttons/buttons.style';
import Tabs from '../common/Tabs';
import { media } from '../../lib/styles/variables';
import { Medium, NotMedium } from '../common/layout/responsive';
import InfoText from '../common/list-item-composition/InfoText';

const RecentTransactionsBlock = styled.section`
  width: 100%;
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin-bottom: 2.7rem;
`;

const StyledTable = styled(Table)`
  --last-col-width: 10rem;
  width: 100%;
  table-layout: fixed;
  tr + tr {
    border-top: 1px solid #f2f4f7;
  }
  tr {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-template-columns: minmax(0, 2fr) 1.2fr 1fr 1fr 1.5fr 0.8fr var(
        --last-col-width
      );
  }
  td {
    padding-block: 1.5rem;
    padding-right: 1rem;
    &.desc {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      > div {
        flex-shrink: 0;
      }
      > span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  ${media.large} {
    --last-col-width: 8rem;
    font-size: 1.3rem;
  }
  ${media.medium} {
    thead {
      display: none;
    }
    tr {
      grid-template-columns: 1fr auto;
      > *:nth-child(2),
      > *:nth-child(3),
      > *:nth-child(4),
      > *:nth-child(5),
      > *:nth-child(7) {
        display: none;
      }
    }
  }
`;

const IconArrowBlock = styled.div`
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid var(--blue-06);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50%;
  }
  ${media.large} {
    width: 2.5rem;
  }
`;

const IconArrow = () => (
  <IconArrowBlock>
    <Arrow />
  </IconArrowBlock>
);

const PaginationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
  font-weight: 500;
  * {
    color: var(--blue-09);
  }
  > button {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    svg {
      width: 0.8rem;
    }
  }
  .pages {
    button {
      width: 4rem;
      aspect-ratio: 1/1;
      border-radius: 10px;
      text-align: center;
      &.selected {
        color: white;
        background-color: var(--blue-09);
      }
    }
  }

  ${media.large} {
    font-size: 1.5rem;
    .pages {
      button {
        width: 3rem;
      }
    }
  }
`;

const Pagination = () => (
  <PaginationBlock>
    <button>
      <ChevronRight style={{ rotate: '180deg' }} />
      <ButtonLabelSmall>Previous</ButtonLabelSmall>
    </button>
    <div className="pages">
      <button className="selected">1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
    <button>
      <ButtonLabelSmall>Next</ButtonLabelSmall>
      <ChevronRight />
    </button>
  </PaginationBlock>
);

const ContainerWithMargin = styled(Container)`
  margin: 2.5rem 0 3rem;
  ${media.large} {
    margin: 2rem 0;
  }
  ${media.medium} {
    padding-block: 0;
  }
`;

const DATA = {
  desc: 'spotify subscription',
  transactionId: '#12548796',
  type: 'shopping',
  card: '1234',
  date: '28 Jan, 12:30 AM',
  amount: '-$2,500',
};

const RecentTransactions = () => {
  const [tab, setTab] = useState(0);
  return (
    <RecentTransactionsBlock>
      <StyledSectionHeader title="recent transactions" />
      <div>
        <Tabs
          tabList={['All Transactions', 'Income', 'Expense']}
          state={tab}
          setState={setTab}
        />
        <ContainerWithMargin>
          <StyledTable
            head={[
              'Description',
              'thansaction ID',
              'Type',
              'Card',
              'Date',
              'Amount',
              'Receipt',
            ]}
          >
            <tbody>
              {[...Array(5)].map(() => (
                <tr>
                  <td className="desc">
                    <IconArrow />
                    <NotMedium>
                      <span>{DATA.desc}</span>
                    </NotMedium>
                    <Medium>
                      <InfoText text={[DATA.desc, DATA.date]} />
                    </Medium>
                  </td>
                  <td>{DATA.transactionId}</td>
                  <td>{DATA.type}</td>
                  <td>{DATA.card} ****</td>
                  <td>{DATA.date}</td>
                  <td>
                    <Amount color="red">{DATA.amount}</Amount>
                  </td>
                  <td>
                    <ButtonForTable>Download</ButtonForTable>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </ContainerWithMargin>
        <Pagination />
      </div>
    </RecentTransactionsBlock>
  );
};

export default RecentTransactions;
