import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, locationQuery, setLocationQuery}}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
