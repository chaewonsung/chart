import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  getResponsiveValueForChartJS,
  media,
  sizes,
} from '../../lib/styles/variables';

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        dash: [5, 5],
      },
      ticks: {
        padding: 10,
        font: {
          size: () => {
            const bp = {
              [sizes.large]: 12,
            };
            return getResponsiveValueForChartJS(bp, 13);
          },
        },
      },
    },
    y: {
      // beginAtZero: true,
      border: {
        dash: [5, 5],
      },
      ticks: {
        padding: 10,
        font: {
          size: () => {
            const bp = {
              [sizes.large]: 12,
            };
            return getResponsiveValueForChartJS(bp, 13);
          },
        },
        callback: (value) => '$' + value,
        stepSize: 10000,
      },
    },
  },
};

const labels = ['2020', '2021', '2022', '2023', '2024', '2025'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int(40000)),
      borderColor: '#FCAA0B',
      pointRadius: 5,
      pointBackgroundColor: 'white',
      pointBorderWidth: 3,
    },
  ],
};

const StyledSection = styled(Section)`
  width: 50%;
`;

export const ChartWrapper = styled.div`
  height: 240px;
  ${media.large} {
    height: 200px;
  }
`;

const YearlyTotalInvestment = () => {
  return (
    <StyledSection header="yearly total investment">
      <ChartWrapper>
        <Line options={options} data={data} />
      </ChartWrapper>
    </StyledSection>
  );
};

export default YearlyTotalInvestment;
