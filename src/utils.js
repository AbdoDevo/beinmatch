import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZE_BREAKPOINT } from './constants';

export const useMobileMediaQuery = () =>
  useMediaQuery({
    query: `(max-width: ${SCREEN_SIZE_BREAKPOINT}px)`,
  });