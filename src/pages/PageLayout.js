import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import NavBar from '../components/common/nav-bar/NavBar';
import Inner from '../components/common/layout/Inner';
import { Outlet, useLocation } from 'react-router';
import Main from '../components/common/layout/Main';

const PageLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Inner>
        <NavBar />
        <Main>
          <Outlet />
        </Main>
      </Inner>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default PageLayout;
