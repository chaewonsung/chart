import React from 'react';
import Investments from '../components/investments/Investments';
import YearlyTotalInvestment from '../components/investments/YearlyTotalInvestment';
import MonthlyRevenue from '../components/investments/MonthlyRevenue';
import MyInvestment from '../components/investments/MyInvestment';
import TrendingStock from '../components/investments/TrendingStock';

const InvestmentsPage = () => {
  return (
    <>
      <Investments />
      <YearlyTotalInvestment />
      <MonthlyRevenue />
      <MyInvestment />
      <TrendingStock />
    </>
  );
};

export default InvestmentsPage;
