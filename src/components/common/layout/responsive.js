import { useMediaQuery } from 'react-responsive';
import { sizes } from '../../../lib/styles/variables';

export const Large = ({ children }) => {
  const isLarge = useMediaQuery({ maxWidth: sizes.large });
  return isLarge ? children : null;
};
export const MidLarge = ({ children }) => {
  const isMidLarge = useMediaQuery({ maxWidth: sizes.midLarge });
  return isMidLarge ? children : null;
};
export const NotMidLarge = ({ children }) => {
  const isNotMidLarge = useMediaQuery({ minWidth: sizes.midLarge + 1 });
  return isNotMidLarge ? children : null;
};
export const Medium = ({ children }) => {
  const isMedium = useMediaQuery({ maxWidth: sizes.medium });
  return isMedium ? children : null;
};
export const NotMedium = ({ children }) => {
  const isNotMedium = useMediaQuery({ minWidth: sizes.medium + 1 });
  return isNotMedium ? children : null;
};
