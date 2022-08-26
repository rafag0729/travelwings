import { createContext, ReactElement, useState } from "react";



export const ContactInfoContext = createContext({});


interface Props {
    children: ReactElement
}

export const ContactInfoContextProvider = ({children}: Props) => {

  const [contactInfo, setContactInfo] = useState({
    email: '',
    number: '',
  })

  return (
    <ContactInfoContext.Provider value={{
      contactInfo
    }}>
        {children}
    </ContactInfoContext.Provider>
  )
}
