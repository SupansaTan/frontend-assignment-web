import React, { useState, useEffect } from 'react';

type Props = {
  children: React.ReactNode
}

export const WindowResizeContext = React.createContext<Boolean>(window.innerWidth<768? true:false);

export const WindowResizeProvider = ({ children }: Props) => {
  const [isMobile, setIsMobile] = useState<Boolean>(window.innerWidth<768? true:false);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth<768? true:false)
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return(
    <WindowResizeContext.Provider value={ isMobile }>
      { children }
    </WindowResizeContext.Provider>
  )
}