import React from 'react';
import Section from '../common/Section';
import { Line } from 'react-chartjs-2';
import { ChartWrapper, data, options } from './YearlyTotalInvestment';
import { cloneDeep } from 'lodash';
import { faker } from '@faker-js/faker';

const newOptions = cloneDeep(options);

newOptions.tension = 0.3;

const newData = cloneDeep(data);

newData.datasets[0].borderColor = '#16DBCC';
newData.datasets[0].pointRadius = 0;
newData.datasets[0].data = newData.labels.map(() => faker.number.int(40000));

const MonthlyRevenue = () => {
  return (
    <Section grow header="monthly revenue">
      <ChartWrapper>
        <Line data={newData} options={newOptions} />
      </ChartWrapper>
    </Section>
  );
};

export default MonthlyRevenue;
