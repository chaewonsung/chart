import React from 'react';
import MyCards from '../components/dashboard/MyCards';
import styled from 'styled-components';
import RecentTransaction from '../components/dashboard/RecentTransaction';
import { rem } from '../lib/styles/variables';
import WeeklyActivity from '../components/dashboard/WeeklyActivity';
import QuickTransfer from '../components/dashboard/QuickTransfer';
import BalanceHistory from '../components/dashboard/BalanceHistory';
import ExpenseStatistics from '../components/dashboard/ExpenseStatistics';

const DashBoardPage = () => {
  return (
    <>
      <MyCards />
      <RecentTransaction />
      <WeeklyActivity />
      <ExpenseStatistics />
      <QuickTransfer />
      <BalanceHistory />
    </>
  );
};

export default DashBoardPage;
