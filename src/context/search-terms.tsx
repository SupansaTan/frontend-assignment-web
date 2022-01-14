import React, { useState, Dispatch, SetStateAction } from 'react';

type Props = {
  children: React.ReactNode
}

type Context = {
  searchTerms: string;
  setSearchTerms: Dispatch<SetStateAction<Context>>;
}

const initialContext: Context = {
  searchTerms: '',
  setSearchTerms: (): void => {}
}

export const SearchTermsContext = React.createContext<Context>(initialContext);

export const SearchTermsProvider = ({ children }: Props) => {
  const [searchTerms, setSearchTerms] = useState<Context>(initialContext)

  return(
    <SearchTermsContext.Provider value={{ ...searchTerms, setSearchTerms }}>
      { children }
    </SearchTermsContext.Provider>
  )
}