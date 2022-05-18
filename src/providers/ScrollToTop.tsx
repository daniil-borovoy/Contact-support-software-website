import { FC, ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: FC<{ children?: ReactNode }> = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    try {
      document.documentElement.scroll({
        top: 0,
        behavior: "smooth",
      });
    } catch (_) {
      document.documentElement.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return <>{children}</>;
};
