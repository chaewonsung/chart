import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../common/SectionHeader';
import Container from '../common/Container';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  getResponsiveValueForChartJS,
  media,
  sizes,
} from '../../lib/styles/variables';
import Section from '../common/Section';

ChartJS.register(ArcElement);

const data = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investments'],
  datasets: [
    {
      data: [30, 15, 35, 20],
      backgroundColor: ['#343C6A', '#FC7900', '#1814F3', '#FA00FF'],
      offset: 10,
      rotation: -50,
      datalabels: {
        offset: -5,
        labels: {
          value: {
            align: 'top',
            formatter: (value) => `${value}%`,
            font: () => {
              const bp = {
                [sizes.large]: 14,
              };
              return {
                size: getResponsiveValueForChartJS(bp),
              };
            },
          },
          name: {
            align: 'bottom',
            formatter: (_, context) =>
              context.chart.data.labels[context.dataIndex],
            font: () => {
              const bp = {
                [sizes.large]: 12,
              };
              return {
                size: getResponsiveValueForChartJS(bp, 13),
              };
            },
          },
        },
      },
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    datalabels: {
      font: {
        family: 'Inter',
        weight: 700,
      },
      color: 'white',
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const ExpenseStatisticsBlock = styled(Section)`
  ${media.medium} {
    min-width: fit-content !important;
  }
  @media (max-width: 620px) {
    min-width: 100% !important;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  ${media.medium} {
    width: 230px;
  }
`;

const ExpenseStatistics = () => {
  return (
    <ExpenseStatisticsBlock grow header="expense statistics">
      <ChartWrapper>
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </ChartWrapper>
    </ExpenseStatisticsBlock>
  );
};

export default ExpenseStatistics;
