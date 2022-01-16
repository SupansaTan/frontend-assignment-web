import React, { useState } from 'react';

type Props = {
  children: React.ReactNode
}

type Context = {
  searchText: string;
  isSubmit: boolean;
  changeSearchText: (inputText: string) => void;
  changeIsSubmit: () => void;
}

const contextDefault: Context = {
  searchText: '',
  isSubmit: false,
  changeSearchText: () => {},
  changeIsSubmit: () => {}
}

export const SearchTextContext = React.createContext<Context>(contextDefault);

export const SearchTextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>('')
  const [isSubmit, setIsSubmit] = useState<boolean>(false)

  const changeSearchText = (inputText: string) => setSearchText(inputText);
  const changeIsSubmit = () => setIsSubmit(!isSubmit);

  return(
    <SearchTextContext.Provider value={{ searchText, changeSearchText, isSubmit, changeIsSubmit }}>
      { children }
    </SearchTextContext.Provider>
  )
}