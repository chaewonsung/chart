import React from 'react';
import { ButtonForForm, Input, InputContainer } from '../common/form.style';
import styled from 'styled-components';
import Pencil from '../../assets/Pencil.svg';
import { media } from '../../lib/styles/variables';

const EditProfileBlock = styled.div`
  display: flex;
  gap: 5.5rem;
  form {
    flex: 1;
  }

  ${media.large} {
    gap: 4rem;
  }
  ${media.medium} {
    flex-direction: column;
    > div:nth-child(1) {
      align-self: center;
    }
  }
`;

const SaveButtonBlock = styled.div`
  text-align: end;
  button {
    width: 19rem;
  }

  ${media.large} {
    button {
      width: 13rem;
    }
  }
`;

export const SaveButton = () => (
  <SaveButtonBlock className="btn-wrapper">
    <ButtonForForm>Save</ButtonForForm>
  </SaveButtonBlock>
);

const EditProfileImgButton = styled.button`
  position: relative;
  img {
    display: block;
    width: 13rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
  div {
    position: absolute;
    left: 85%;
    top: 85%;
    transform: translate(-50%, -50%);
    width: 3rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: var(--blue-09);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 50%;
    }
  }

  ${media.large} {
    img {
      width: 11rem;
    }
    div {
      width: 2.5rem;
    }
  }
  ${media.medium} {
    img {
      width: 170px;
    }
    div {
      width: 35px;
    }
  }
`;

const INPUT_LIST = [
  { id: 1, label: 'your name', type: 'text', placeholder: 'Chariene Reed' },
  { id: 2, label: 'user name', type: 'text', placeholder: 'Chariene Reed' },
  {
    id: 3,
    label: 'email',
    type: 'email',
    placeholder: 'charienereed@gmail.com',
  },
  { id: 4, label: 'password', type: 'password', placeholder: '**********' },
  {
    id: 5,
    label: 'date of birth',
    type: 'text',
    placeholder: '25 January 1990',
  },
  {
    id: 6,
    label: 'present address',
    type: 'address',
    placeholder: 'San Jose, California, USA',
  },
  {
    id: 7,
    label: 'permanent address',
    type: 'address',
    placeholder: 'San Jose, California, USA',
  },
  { id: 8, label: 'city', type: 'text', placeholder: 'San Jose' },
  { id: 9, label: 'postal code', type: 'number', placeholder: '45962' },
  { id: 10, label: 'country', type: 'text', placeholder: 'USA' },
];

const EditProfile = () => {
  return (
    <EditProfileBlock>
      <div>
        <EditProfileImgButton>
          <img src="/images/profile-big-01.png" alt="" />
          <div>
            <Pencil />
          </div>
        </EditProfileImgButton>
      </div>
      <form>
        <InputContainer>
          {INPUT_LIST.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={label}>{label}</label>
              <Input id={label} type={type} placeholder={placeholder} />
            </div>
          ))}
        </InputContainer>
        <SaveButton />
      </form>
    </EditProfileBlock>
  );
};

export default EditProfile;
