import React from 'react';
import DashBoardPage from './pages/DashboardPage';
import { Route, Routes } from 'react-router';
import PageLayout from './pages/PageLayout';
import TransactionsPage from './pages/TransactionsPage';
import AccountsPage from './pages/AccountsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import CreditCardsPage from './pages/CreditCardsPage';
import LoansPage from './pages/LoansPage';
import ServicesPage from './pages/ServicesPage';
import MyPrivilegesPage from './pages/MyPrivilegesPage';
import SettingPage from './pages/SettingPage';
import Practice from '../Practice';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<DashBoardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
        <Route path="/credit-cards" element={<CreditCardsPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/my-privileges" element={<MyPrivilegesPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Route>
        <Route path="/practice" element={<Practice />} />
    </Routes>
  );
};

export default App;
