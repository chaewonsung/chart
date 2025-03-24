import React from 'react';
import Section from '../common/Section';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import styled from 'styled-components';
import {
  getResponsiveValueForChartJS,
  media,
  sizes,
} from '../../lib/styles/variables';

const options = {
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        color: '#718EBF',
        usePointStyle: true,
        pointStyle: 'rectRounded',
        boxWidth: 10,
        boxHeight: 10,
        font: {
          size: () => {
            const bp = {
              [sizes.large]: 12,
            };
            return getResponsiveValueForChartJS(bp, 15);
          },
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: () => {
            const bp = {
              [sizes.large]: 12,
            };
            return getResponsiveValueForChartJS(bp, 13);
          },
        },
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const config = {
  borderRadius: '10',
  barPercentage: 0.8,
  categoryPercentage: 0.8,
};

const data = {
  labels,
  datasets: [
    {
      label: 'Debit',
      data: labels.map(() => faker.number.int(500)),
      backgroundColor: '#1A16F3',
      ...config,
    },
    {
      label: 'Credit',
      data: labels.map(() => faker.number.int(500)),
      backgroundColor: '#FCAA0B',
      ...config,
    },
  ],
};

const DebitAndCreditOverviewBlock = styled(Section)`
  width: calc(730 / 1110 * 100%);
  height: 364px;
  ${media.large} {
    height: auto;
  }
`;
const Content = styled.div`
  height: 100%;
  position: relative;
  height: 240px;
  > span {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--text-blue);
    transform: translateY(10px);
    i {
      color: var(--primary-navy);
    }
  }

  ${media.large} {
    span {
      font-size: 1.2rem;
    }
  }
  ${media.medium} {
    height: 220px;
    > span {
      opacity: 0;
    }
  }
`;

const DebitAndCreditOverview = () => {
  return (
    <DebitAndCreditOverviewBlock header="debit & credit overview">
      <Content>
        <span>
          <i>$7,560</i> Debited & <i>$5,420</i> Credited in this Week
        </span>
        <Bar options={options} data={data} />
      </Content>
    </DebitAndCreditOverviewBlock>
  );
};

export default DebitAndCreditOverview;
