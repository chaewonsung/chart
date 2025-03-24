import React from 'react';
import MyCards from '../components/credit-cards/MyCards';
import CardExpenseStatistics from '../components/credit-cards/CardExpenseStatistics';
import CardList from '../components/credit-cards/CardList';
import AddNewCard from '../components/credit-cards/AddNewCard';
import CardSetting from '../components/credit-cards/CardSetting';

const CreditCardsPage = () => {
  return (
    <>
      <MyCards />
      <CardExpenseStatistics />
      <CardList />
      <AddNewCard />
      <CardSetting />
    </>
  );
};

export default CreditCardsPage;
