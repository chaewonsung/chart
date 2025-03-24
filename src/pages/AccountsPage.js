import React from 'react';
import Accounts from '../components/accounts/Accounts';
import MyCard from '../components/accounts/MyCard';
import DebitAndCreditOverview from '../components/accounts/DebitAndCreditOverview';
import InvoicesSent from '../components/accounts/InvoicesSent';
import LastTransaction from '../components/accounts/LastTransaction';

const AccountsPage = () => {
  return (
    <>
      <Accounts />
      <LastTransaction />
      <MyCard />
      <DebitAndCreditOverview />
      <InvoicesSent />
    </>
  );
};

export default AccountsPage;
