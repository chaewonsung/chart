import React from 'react';
import Section from '../common/Section';
import styled from 'styled-components';
import { PolarArea } from 'react-chartjs-2';
import { media } from '../../lib/styles/variables';

const options = {
  layout: {
    padding: 0,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },

  scales: {
    r: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ['ABM Bank', 'BRC Bank', 'MCP Bank', 'DBL Bank'],
  datasets: [
    {
      data: [100, 70, 80, 90],
      backgroundColor: ['#16DBCC', '#FF82AC', '#FFBB38', '#4C78FF'],
      borderWidth: 0,
    },
  ],
};

const StyledSection = styled(Section)`
  width: calc(350 / 1110 * 100%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Chart = styled.div`
  width: 180px;
  aspect-ratio: 1/1;
  margin: auto;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    aspect-ratio: 1/1;
  }
  &::after {
    width: 35%;
    background: white;
  }
  &::before {
    width: 45%;
    background-color: hsla(0, 0%, 50%, 0.1);
  }
`;

const Legend = styled.div`
  display: grid;
  width: max-content;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    color: var(--text-blue);
    font-size: 1.5rem;
    i {
      width: 1em;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
  }

  ${media.large} {
    > div {
      font-size: 1.2rem;
    }
  }
`;

const CardExpenseStatistics = () => {
  return (
    <StyledSection header="card expense statistics">
      <Content>
        <Chart>
          <PolarArea data={data} options={options} />
        </Chart>
        <Legend>
          {data.labels.map((label, i) => (
            <div>
              <i
                style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
              ></i>
              {label}
            </div>
          ))}
        </Legend>
      </Content>
    </StyledSection>
  );
};

export default CardExpenseStatistics;
