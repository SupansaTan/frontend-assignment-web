import React, { useState } from 'react';

type Props = {
  children: React.ReactNode
}

type Context = {
  searchText: string;
  changeSearchText: (inputText: string) => void;
}

const contextDefault: Context = {
  searchText: '',
  changeSearchText: () => {},
}

export const SearchTextContext = React.createContext<Context>(contextDefault);

export const SearchTextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>('')

  const changeSearchText = (inputText: string) => setSearchText(inputText);

  return(
    <SearchTextContext.Provider value={{ searchText, changeSearchText }}>
      { children }
    </SearchTextContext.Provider>
  )
}