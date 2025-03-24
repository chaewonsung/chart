import React from 'react';
import Loans from '../components/loans/Loans';
import ActiveLoansOverview from '../components/loans/ActiveLoansOverview';

const LoansPage = () => {
  return (
    <>
      <Loans />
      <ActiveLoansOverview />
    </>
  );
};

export default LoansPage;
