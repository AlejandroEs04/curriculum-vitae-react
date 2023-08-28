'use client'
import { createContext, useContext, useState } from "react"

const EmailContext = createContext()

const EmailProvider = ({children}) => {
    return (
        <EmailContext.Provider
            value={{
                
            }}
        >
            {children}
        </EmailContext.Provider>
    )
}

export {
    EmailProvider
}

export default EmailContext