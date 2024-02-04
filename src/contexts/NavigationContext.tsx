import React, { createContext, useContext, useState } from 'react'

interface props{
    children : React.ReactNode
}
const Navigation :any = createContext(null)
function NavigationContext({children} : props) {
 const [selectedHeader, setSelectedHeader] = useState("");

  return (
   <Navigation.Provider value={{selectedHeader ,setSelectedHeader }} >
      {children}
   </Navigation.Provider>
  )
}
export default NavigationContext

export const NavigationState = () => {
    return useContext(Navigation);
  };