export const getInitialTabState = (pathname: string) => {
  switch (pathname) {
    case "/":
      return 0;
    case "/articles":
      return 1;
    case "/methods":
      return 2;
    case "/tasks":
      return 3;
    case "/references":
      return 4;
    case "/results":
      return 5;
    case "/about":
      return 6;
    default:
      return 0;
  }
};
