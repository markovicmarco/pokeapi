import {createContext, useState, useContext} from 'react';

const darkMode = createContext();
const protectedRoute = createContext();
const howManyItems = createContext();

const useProvideDark = () => {
  const [isDark, setIsDark] = useState(false);

  const changeDark = () => {
    setIsDark(!isDark);
  }

  return {isDark, changeDark}
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

const useProvideNumItems = () => {
  const [itemsPerPage, setItems] = useState(16);

  const setItemsPerPage = (items) => {
    setItems(items);
  }
  
  return {itemsPerPage, setItemsPerPage}
}

export const ProvideDark = ({children}) => {
  const dark = useProvideDark();
  return <darkMode.Provider value={dark}>{children}</darkMode.Provider>
}

export const ProvideProtected = ({children}) => {
  const protect = useProvideProtected();

  return <protectedRoute.Provider value={protect}>{children}</protectedRoute.Provider>
}

export const ProvideNumItems = ({children}) => {
  const items = useProvideNumItems();

  return <howManyItems.Provider value={items}>{children}</howManyItems.Provider>
}

export const useDarkMode = () => useContext(darkMode);
export const useProtectedRoute = () => useContext(protectedRoute);
export const useNumItems = () => useContext(howManyItems);