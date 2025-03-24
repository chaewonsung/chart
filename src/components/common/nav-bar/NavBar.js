import React, { useCallback, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Home from '../../../assets/Home.svg';
import Transfer from '../../../assets/Transfer.svg';
import User from '../../../assets/User.svg';
import Investment from '../../../assets/Investment.svg';
import CreditCard from '../../../assets/CreditCard.svg';
import Loan from '../../../assets/Loan.svg';
import Service from '../../../assets/Service.svg';
import Econometrics from '../../../assets/Econometrics.svg';
import SolidSettings from '../../../assets/SolidSettings.svg';
import styled from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';
import { Title3 } from '../Text.styles';
import MenuContext from '../../../contexts/menu';

const data = [
  { id: 1, item: 'dashboard', Icon: Home, path: '/' },
  { id: 2, item: 'transactions', Icon: Transfer, path: '/transactions' },
  { id: 3, item: 'accounts', Icon: User, path: '/accounts' },
  { id: 4, item: 'investments', Icon: Investment, path: '/investments' },
  { id: 5, item: 'credit cards', Icon: CreditCard, path: '/credit-cards' },
  { id: 6, item: 'loans', Icon: Loan, path: '/loans' },
  { id: 7, item: 'services', Icon: Service, path: '/services' },
  {
    id: 8,
    item: 'my privileges',
    Icon: Econometrics,
    path: '/my-privileges',
  },
  { id: 9, item: 'setting', Icon: SolidSettings, path: '/setting' },
];

const NavBarBlock = styled.nav`
  position: sticky;
  top: var(--header-height);
  width: var(--sidebar-width);
  float: left;
  background-color: white;
  a {
    display: block;
    height: ${rem(60)};
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 25px;
    color: #b1b1b1;
    padding-left: 44px;
    transition: color 0.1s;
    position: relative;
    overflow: hidden;
    &:hover,
    &.located {
      color: var(--primary-blue);
    }
    &.located {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 12px;
        height: 100%;
        transform: translateX(-50%);
        background-color: var(--primary-blue);
        border-radius: 99px;
      }
    }
  }
  svg {
    width: 2.5rem;
  }

  ${media.large} {
    a {
      height: 6rem;
      gap: 20px;
      padding-left: 30px;
      &.located {
        &::before {
          width: 10px;
        }
      }
    }
    svg {
      width: 2rem;
    }
  }
  ${media.midLarge} {
    position: fixed;
    top: 0;
    z-index: 998;
    height: 100%;
    padding-top: var(--header-height);
    transform: translateX(-100%);
    transition: transform 0.2s;
    border-right: 1px solid var(--gray-00);
    &.open {
      transform: translateX(0);
    }
  }
`;

const NavBar = () => {
  const { pathname } = useLocation();
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const handleHideNavBar = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.addEventListener('click', handleHideNavBar);
    return document.body.removeEventListener('click', handleHideNavBar);
  }, []);

  return (
    <NavBarBlock className={isOpen ? 'open' : ''}>
      <ul>
        {data.map(({ id, item, Icon, path }) => (
          <li key={id}>
            <Link
              to={path}
              className={path === pathname && 'located'}
              onClick={handleHideNavBar}
            >
              <Icon />
              <Title3 as="div">{item}</Title3>
            </Link>
          </li>
        ))}
      </ul>
    </NavBarBlock>
  );
};

export default NavBar;
