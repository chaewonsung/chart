import { css } from 'styled-components';

export const rem = (px) => px / 10 + 'rem';

export const sizes = {
  large: 1240,
  midLarge: 1024,
  medium: 768,
};

export const getResponsiveValueForChartJS = (
  breakpoints,
  defaultValue = 16
) => {
  const key = Object.keys(breakpoints).find((size) => window.innerWidth < size);
  if (key) return breakpoints[key];
  return defaultValue;
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = () => `@media (max-width: ${sizes[label]}px)`;
  return acc;
}, {});

export const overflowContainer = css`
  overflow: auto;
  margin-inline: calc(var(--main-padding) * -1);
  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    min-width: fit-content;
    padding-inline: var(--main-padding);
  }
`;
