import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../common/SectionHeader';
import { Line } from 'react-chartjs-2';
import Container from '../common/Container';
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import Section from '../common/Section';
import { media } from '../../lib/styles/variables';

ChartJS.register(PointElement, LineElement, Tooltip, Filler);

export const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      border: {
        dash: [5, 5],
      },
    },
    y: {
      border: {
        dash: [5, 5],
      },
      ticks: {
        stepSize: 200,
      },
    },
  },
};

const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int(800)),
      borderColor: '#1814F3',
      pointRadius: 0,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(
          0,
          0,
          0,
          canvas.canvas.offsetHeight
        );

        gradient.addColorStop(0, '#2D60FF50');
        gradient.addColorStop(1, '#2D60FF00');

        return gradient;
      },
      fill: 'start',
    },
  ],
};

const BalanceHistoryBlock = styled(Section)``;

const ChartWrapper = styled.div`
  height: 240px;
  ${media.large} {
    height: 210px;
  }
`;

const BalanceHistory = () => {
  return (
    <BalanceHistoryBlock grow header="balance history">
      <ChartWrapper>
        <Line options={options} data={data} />
      </ChartWrapper>
    </BalanceHistoryBlock>
  );
};

export default BalanceHistory;
