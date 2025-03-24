import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import { TBodyTr, THead } from '../common/Table';
import { ButtonForTable } from '../common/buttons/buttons.style';
import { media } from '../../lib/styles/variables';

const data = [1, 100000, 40500, 8, 12, 2000];

const Table = styled.table`
  tr {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1.6fr 1.8fr 1.7fr 1.3fr 2fr 100px;
    align-items: center;
  }
  tfoot {
    border-top: 1px solid var(--blue-01);
    color: var(--secondary-pink);
    text-align: left;
    font-weight: 500;
    th,
    td {
      padding-top: 1.1rem;
    }
  }

  ${media.large} {
    font-size: 1.3rem;
  }
  ${media.medium} {
    font-size: 1.2rem;
    tr {
      grid-template-columns: 1fr 1.2fr 70px;
      /* gap: 1.1rem; */
      > *:nth-child(1),
      > *:nth-child(3),
      > *:nth-child(4),
      > *:nth-child(5) {
        display: none;
      }
    }
  }
`;

const ActiveLoansOverview = () => {
  return (
    <Section grow header="active loans overview">
      <Table>
        <THead
          head={[
            'SL No',
            'Loan Money',
            'Left to repay',
            'Duration',
            'Interest rate',
            'Installment',
            'Repay',
          ]}
        />
        <tbody>
          {[...new Array(8)].map((_, i) => (
            <TBodyTr key={i}>
              <td>0{i + 1}.</td>
              <td>${data[1].toLocaleString()}</td>
              <td>${data[2].toLocaleString()}</td>
              <td>{data[3]} Months</td>
              <td>{data[4]}%</td>
              <td>${data[5].toLocaleString()} / month</td>
              <td className="repay">
                <ButtonForTable>Repay</ButtonForTable>
              </td>
            </TBodyTr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>$1,250,000</td>
            <td>$750,000</td>
            <td></td>
            <td></td>
            <td>$50,000 / month</td>
          </tr>
        </tfoot>
      </Table>
    </Section>
  );
};

export default ActiveLoansOverview;
