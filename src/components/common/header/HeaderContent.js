import React, { useContext } from 'react';
import styled from 'styled-components';
import { media } from '../../../lib/styles/variables';
import { Title1 } from '../Text.styles';
import Logo from './Logo';
import SubButtons from './SubButtons';
import { Link, useLocation } from 'react-router';
import { MidLarge, NotMidLarge } from '../layout/responsive';
import SearchForm from './SearchForm';
import Menu from '../../../assets/Menu.svg';
import MenuContext from '../../../contexts/menu';

const HeaderContentDefaultBlock = styled.div`
  height: var(--header-height);
  display: flex;
  align-items: center;
  > div:first-child {
    width: var(--sidebar-width);
    padding-left: 38px;
  }
  > div:last-child {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--main-padding);
  }

  ${media.large} {
    > div:first-child {
      padding-left: 27px;
    }
  }
`;

const HeaderContentSmallBlock = styled.div`
  padding: 0 var(--main-padding);
  height: var(--header-height);
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0 2rem;
  }
  svg {
    width: 2.5rem;
  }

  ${media.medium} {
    svg {
      width: 2rem;
    }
  }
`;

const TitleBlock = styled(Title1)`
  text-transform: capitalize;
`;

const Title = () => {
  const { pathname } = useLocation();
  const title = pathname.slice(1).split('-').join(' ') || 'Dashboard';
  return <TitleBlock>{title}</TitleBlock>;
};

const Buttons = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;
`;

const ProfileBlock = styled(Link)`
  width: 6rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  ${media.large} {
    width: 4.5rem;
  }
  ${media.medium} {
    width: 3.5rem;
  }
`;

const Profile = () => (
  <ProfileBlock to="/setting">
    <img src="/images/profile-01.png" alt="" />
  </ProfileBlock>
);

const HeaderContent = () => {
  return (
    <>
      <NotMidLarge>
        <HeaderContentDefault />
      </NotMidLarge>
      <MidLarge>
        <HeaderContentSmall />
      </MidLarge>
    </>
  );
};

const HeaderContentDefault = () => {
  return (
    <HeaderContentDefaultBlock>
      <div>
        <Logo />
      </div>
      <div>
        <Title />
        <Buttons>
          <SubButtons />
          <Profile />
        </Buttons>
      </div>
    </HeaderContentDefaultBlock>
  );
};

const HeaderContentSmall = () => {
  const { setIsOpen: setIsMenuOpen } = useContext(MenuContext);

  return (
    <HeaderContentSmallBlock>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <Menu />
        </button>
        <Title />
        <Profile />
      </div>
      <SearchForm />
    </HeaderContentSmallBlock>
  );
};

export default HeaderContent;
