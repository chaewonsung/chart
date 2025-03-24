import React from 'react';
import Section from '../common/Section';
import BlockCard from '../../assets/BlockCard.svg';
import Lock from '../../assets/Lock.svg';
import Samsung from '../../assets/Samsung.svg';
import AppleStroke from '../../assets/AppleStroke.svg';
import IconWrapper from '../common/list-item-composition/IconWrapper';
import InfoText from '../common/list-item-composition/InfoText';
import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

const data = [
  {
    text: ['Block Card', 'Instantly block your card'],
    icon: { Icon: BlockCard, color: 'yellow' },
  },
  {
    text: ['Change Pin Code', 'Choose another pin code'],
    icon: { Icon: Lock, color: 'blue' },
  },
  {
    text: ['Add to Google Pay', 'Withdraw without any card'],
    icon: { Icon: Samsung, color: 'pink' },
  },
  {
    text: ['Add to Apple Pay', 'Withdraw without any card'],
    icon: { Icon: AppleStroke, color: 'green' },
  },
  {
    text: ['Add to Apple Store', 'Withdraw without any card'],
    icon: { Icon: AppleStroke, color: 'green' },
  },
];

const List = styled.div``;

const ListItem = styled.div`
  display: flex;
  gap: var(--gap-icon);
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const CardSetting = () => {
  return (
    <Section grow header="card setting">
      <List>
        {data.map(({ text, icon }) => (
          <ListItem>
            <IconWrapper curved color={icon.color}>
              <icon.Icon />
            </IconWrapper>
            <InfoText text={text} />
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default CardSetting;
