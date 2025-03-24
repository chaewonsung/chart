import React, { useState } from 'react';
import Container from '../common/Container';
import Tabs from '../common/Tabs';
import EditProfile from './EditProfile';
import styled from 'styled-components';
import Preferences from './Preferences';
import Security from './Security';
import { media } from '../../lib/styles/variables';

const Content = styled.div`
  padding-block: 5.5rem 3rem;

  ${media.medium} {
    padding-block: 2.5rem;
  }
`;

const Setting = () => {
  const [tab, setTab] = useState(0);
  return (
    <Container>
      <Tabs
        tabList={['Edit Profile', 'Preferences', 'Security']}
        state={tab}
        setState={setTab}
      />
      <Content>
        {tab === 0 ? (
          <EditProfile />
        ) : tab === 1 ? (
          <Preferences />
        ) : (
          <Security />
        )}
      </Content>
    </Container>
  );
};

export default Setting;
