import React from 'react';
import MyCards from '../components/transactions/MyCards';
import MyExpense from '../components/transactions/MyExpense';
import RecentTransactions from '../components/transactions/RecentTransactions';

const TransactionsPage = () => {
  return (
    <>
      <MyCards />
      <MyExpense />
      <RecentTransactions />
    </>
  );
};

export default TransactionsPage;
