import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../common/SectionHeader';
import Container from '../common/Container';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  getResponsiveValueForChartJS,
  media,
  sizes,
} from '../../lib/styles/variables';
import Section from '../common/Section';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ticksFontConfig = {
  size: () => {
    const breakpoints = {
      [sizes.large]: 12,
    };
    return getResponsiveValueForChartJS(breakpoints, 13);
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        color: '#718EBF',
        usePointStyle: true,
        boxWidth: 7,
        boxHeight: 7,
        font: {
          size: () => {
            const breakpoints = {
              [sizes.large]: '13rem',
            };

            return getResponsiveValueForChartJS(breakpoints, 15);
          },
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: ticksFontConfig,
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 100,
        font: ticksFontConfig,
      },
    },
  },
};

const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const config = {
  borderRadius: 99,
  barPercentage: 0.6,
  categoryPercentage: 0.6,
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Diposit',
      data: labels.map(() => faker.number.int(500)),
      backgroundColor: '#1814F3',
      ...config,
    },
    {
      label: 'Withdraw',
      data: labels.map(() => faker.number.int(500)),
      backgroundColor: '#16DBCC',
      ...config,
    },
  ],
};

const WeeklyActivityBlock = styled(Section)`
  width: calc(730 / 1110 * 100%);
`;

const ChartWrapper = styled.div`
  height: 280px;
  ${media.midLarge} {
    height: 240px;
  }
`;

const WeeklyActivity = () => {
  return (
    <WeeklyActivityBlock header="weekly activity">
      <ChartWrapper>
        <Bar options={options} data={data} />
      </ChartWrapper>
    </WeeklyActivityBlock>
  );
};

export default WeeklyActivity;
