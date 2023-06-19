import { ReactNode, useLayoutEffect } from 'react';
import { Routes, useLocation } from 'react-router-dom';

import { routes } from './routes';

type Props = {
  children?: ReactNode;
};

export const AppRoutes = ({ children }: Props) => {
  const location = useLocation();
  // Scroll to top when a path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div id="modal" />
      <Routes>
        {routes}
        {children}
      </Routes>
    </>
  );
};
