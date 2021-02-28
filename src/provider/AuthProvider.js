import {createContext, useState, useContext} from 'react';

const darkMode = createContext();
const protectedRoute = createContext();

const useProvideDark = () => {
  const [isDark, setIsDark] = useState(false);

  const darkOn = () => {
    setIsDark(true);
  }

  const darkOff = () => {
    setIsDark(false);
  }

  return {isDark, darkOn, darkOff}
}

const useProvideProtected = () => {
  const [isAllowed, setIsAllowed] = useState(false);

  const setAllowed = () => {
    setIsAllowed(true);
  }

  const setNotAllowed = () => {
    setIsAllowed(false);
  }

  return {isAllowed, setAllowed, setNotAllowed}
}

export const ProvideDark = ({children}) => {
  const dark = useProvideDark();
  return <darkMode.Provider value={dark}>{children}</darkMode.Provider>
}

export const ProvideProtected = ({children}) => {
  const protect = useProvideProtected();

  return <protectedRoute.Provider value={protect}>{children}</protectedRoute.Provider>
}

export const useDarkMode = () => useContext(darkMode);
export const useProtectedRoute = () => useContext(protectedRoute);
