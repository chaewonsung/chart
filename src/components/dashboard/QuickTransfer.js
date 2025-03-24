import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../common/ProfileImg';
import Send from '../../assets/Send.svg';
import ChevronRight from '../../assets/ChevronRight.svg';
import InfoText from '../common/list-item-composition/InfoText';
import Section from '../common/Section';
import { media } from '../../lib/styles/variables';

const QuickTransferBlock = styled(Section)`
  width: calc(445 / 1110 * 100%);
  ${media.medium} {
    min-width: auto !important;
    flex: 1 !important;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  > * {
    width: 100%;
  }
`;

const UserList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  flex: 1;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-right: 1rem;
`;

const UserListItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const StyledInfoText = styled(InfoText)`
  text-transform: capitalize;
  text-align: center;
  ${UserListItem}.selected & {
    * {
      font-weight: 700;
    }
  }
`;

const ChevronRightButton = styled.button`
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: white;
  box-shadow: 4px 4px 18px -2px #e7e4e880;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--blue-06);
  svg {
    height: 1.6rem;
    display: block;
  }

  ${media.large} {
    width: 40px;
  }
`;

export const InputWrapper = styled.div`
  background-color: var(--blue-02);
  border-radius: 99px;
  display: flex;
  input {
    flex: 1;
    min-width: 10rem;
    width: 0;
    color: var(--blue-06);
    padding-inline: 3rem 1.5rem;
  }
  button {
    display: flex;
    color: white;
    background-color: var(--blue-09);
    display: flex;
    align-items: center;
    gap: 1.1rem;
    padding: 1.35rem 2.4rem;
    border-radius: 99px;
    svg {
      width: 2.6rem;
    }
    ${media.large} {
      font-size: 1.3rem;
      svg {
        width: 2rem;
      }
    }
  }

  ${media.large} {
    input {
      min-width: 7rem;
      padding-inline: 1.5rem;
    }
    button {
      padding: 1.2rem 2rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  gap: 5%;
  align-items: center;
  label {
    color: var(--blue-06);
  }
  ${InputWrapper} {
    flex: 1;
  }
  ${media.large} {
    font-size: 1.2rem;
  }
`;

const userList = [
  { id: 1, name: 'livia bator', role: 'CEO' },
  { id: 2, name: 'randy press', role: 'director' },
  { id: 3, name: 'workman', role: 'Designer' },
];

const QuickTransfer = () => {
  return (
    <QuickTransferBlock header="quick transfer">
      <Container>
        <UserList>
          <Ul>
            {userList.map(({ id, name, role }) => (
              <li key={id}>
                <UserListItem className={id === 1 && 'selected'}>
                  <ProfileImg src={`/images/profile-0${id + 1}.png`} />
                  <StyledInfoText text={[name, role]} />
                </UserListItem>
              </li>
            ))}
          </Ul>
          <ChevronRightButton>
            <ChevronRight />
          </ChevronRightButton>
        </UserList>
        <Form>
          <label for="amout">Write Amount</label>
          <InputWrapper>
            <input id="amout" type="number" placeholder="525.50" />
            <button>
              Send
              <Send />
            </button>
          </InputWrapper>
        </Form>
      </Container>
    </QuickTransferBlock>
  );
};

export default QuickTransfer;
